import SectionData from "./data/sectionData";

function SectionItem({ index }) {
  const sec = SectionData[index];
  if (!sec) return null;

  return (
    <>
      <h2 className="text-4xl mb-4">{sec.heading}</h2>
      <p>{sec.caption}</p>
    </>
  );
}

export default SectionItem;
