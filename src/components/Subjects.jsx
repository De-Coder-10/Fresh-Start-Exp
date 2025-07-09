import React, { useState, useEffect } from "react";
import SubjectInfoCard from "./SubjectInfoCard";
import Navbar2 from "./Navbar2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Subjects({ w, subjectData, setSubjectData, semestersData, setSemestersData, selectedSem, setSelectedSem }) {
  const [loading, setLoading] = useState(!semestersData);
  const [subjectsLoading, setSubjectsLoading] = useState(!subjectData);

  useEffect(() => {
    const fetchSemesters = async () => {
      if (semestersData) {
        if (semestersData.semesters.length > 0 && !selectedSem) {
          setSelectedSem(semestersData.latest_semester);

          if (!subjectData?.[semestersData.latest_semester.registration_id]) {
            const data = await w.get_registered_subjects_and_faculties(semestersData.latest_semester);
            setSubjectData(prev => ({
              ...prev,
              [semestersData.latest_semester.registration_id]: data
            }));
          }
        }
        return;
      }

      setLoading(true);
      setSubjectsLoading(true);
      try {
        const registeredSems = await w.get_registered_semesters();
        const latestSem = registeredSems[0];

        setSemestersData({
          semesters: registeredSems,
          latest_semester: latestSem
        });

        setSelectedSem(latestSem);

        if (!subjectData?.[latestSem.registration_id]) {
          const data = await w.get_registered_subjects_and_faculties(latestSem);
          setSubjectData(prev => ({
            ...prev,
            [latestSem.registration_id]: data
          }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setSubjectsLoading(false);
      }
    };

    fetchSemesters();
  }, [w, setSubjectData, semestersData, setSemestersData]);

  const handleSemesterChange = async (value) => {
    setSubjectsLoading(true);
    try {
      const semester = semestersData?.semesters?.find(sem => sem.registration_id === value);
      setSelectedSem(semester);

      if (subjectData?.[semester.registration_id]) {
        setSubjectsLoading(false);
        return;
      }

      const data = await w.get_registered_subjects_and_faculties(semester);
      setSubjectData(prev => ({
        ...prev,
        [semester.registration_id]: data
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setSubjectsLoading(false);
    }
  };

  const currentSubjects = selectedSem && subjectData?.[selectedSem.registration_id];
  const groupedSubjects = currentSubjects?.subjects?.reduce((acc, subject) => {
    const baseCode = subject.subject_code;
    if (!acc[baseCode]) {
      acc[baseCode] = {
        name: subject.subject_desc,
        code: baseCode,
        credits: subject.credits,
        components: [],
        isAudit: subject.audtsubject === "Y"
      };
    }
    acc[baseCode].components.push({
      type: subject.subject_component_code,
      teacher: subject.employee_name
    });
    return acc;
  }, {}) || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c1f] to-[#0f1113] text-white font-sans pb-24">
      {/* Sticky Header */}
      <div className="sticky top-14 bg-[#191c20] backdrop-blur-md border-b border-white/10 z-20">
        <div className="py-4 px-4">
          <Select
            onValueChange={handleSemesterChange}
            value={selectedSem?.registration_id}
            disabled={loading}
          >
            <SelectTrigger className="bg-[#22252b] text-white border border-white/20 rounded-lg hover:border-white/40 transition-colors">
              <SelectValue placeholder={loading ? "Loading semesters..." : "Select semester"}>
                {selectedSem?.registration_code}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#1e1f22] border border-white/20 rounded-md text-white">
              {semestersData?.semesters?.map((sem) => (
                <SelectItem
                  key={sem.registration_id}
                  value={sem.registration_id}
                  className="hover:bg-white/10"
                >
                  {sem.registration_code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-4 space-y-6">
        <p className="text-sm lg:text-base text-white/70">
          Total Credits: <span className="font-medium text-white">{currentSubjects?.total_credits || 0}</span>
        </p>

        {subjectsLoading ? (
          <div className="flex items-center justify-center h-60">
            <p className="text-white/50 text-sm animate-pulse">Loading subjects...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.values(groupedSubjects).map((subject) => (
              <SubjectInfoCard key={subject.code} subject={subject} />
            ))}
          </div>
        )}
      </div>

      <Navbar2 />
    </div>
  );
}
