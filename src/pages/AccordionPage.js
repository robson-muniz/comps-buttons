import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {   id:'lb23j',
            label: 'Can I use React on a Project?',
            content: 'Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!! Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!!'

        },
        {    id:'lb23j2',
            label: 'Can I use JavaScript on a Project?',
            content: 'Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!! Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!!'
        },
        {   id:'lb23j363',
            label: 'Can I use CSS on a Project?',
            content: 'Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!! Yes, you can use ReactJS on any project you want, and you know what, that is a very good adea, there is a lot of good reasons for you actually do it!!!'
        }
    ]

    return (
        <Accordion items={items} />
    )
}

export default AccordionPage;