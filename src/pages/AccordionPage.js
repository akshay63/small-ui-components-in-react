import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "13wasfsa",
      label: "Can I use React on a project?",
      content:
        "'Yes,you  cna use React on any project you want. You can use it as a Frontend library for Web building applicaitons or creating mobile apps.",
    },
    {
      id: "asfadsfads",
      label: "Can I use React on a project?",
      content:
        "'Yes,you  cna use React on any project you want. You can use it as a Frontend library for Web building applicaitons or creating mobile apps.",
    },
    {
      id: "mfalsdnf",
      label: "Can I use React on a project?",
      content:
        "'Yes,you  cna use React on any project you want. You can use it as a Frontend library for Web building applicaitons or creating mobile apps.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
