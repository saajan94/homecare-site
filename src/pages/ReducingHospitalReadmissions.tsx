import ServicePage from "../components/ServicePage";

export default function ReducingHospitalReadmissions() {
  return (
    <ServicePage
      eyebrow="For Professionals"
      title="Reducing Hospital Readmissions"
      paragraphs={[
        "The first few days and weeks after leaving the hospital are an important part of recovery. Without enough assistance at home, older adults may struggle with daily routines, miss medications, experience a fall, or overlook changes in their condition. Our caregivers provide dependable support to help make recovery safer and more comfortable.",
        "We can assist with medication reminders, personal hygiene, mobility, nutritious meals, light housekeeping, and transportation to follow-up visits. Caregivers also pay close attention to changes such as increased weakness, confusion, discomfort, or loss of appetite and promptly communicate concerns to the family so they can contact the appropriate healthcare provider.",
        "By following the discharge plan and providing consistent help at home, we aim to reduce avoidable complications that may lead to another hospital visit. Our goal is to support a smoother recovery, give families peace of mind, and help each client regain strength and confidence at their own pace.",
      ]}
    />
  );
}
