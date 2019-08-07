
import tachometer from '../../../assets/images/tachometer-alt-solid.svg';
import list from '../../../assets/images/list-alt-regular.svg';
import book from '../../../assets/images/book-open-solid.svg';
import message from '../../../assets/images/message (copy).svg';
import building from '../../../assets/images/building (copy).svg';
import file from '../../../assets/images/file-alt-regular.svg';
import badge from '../../../assets/images/badge (copy).svg';
import edit from '../../../assets/images/edit-regular (1) (copy).svg'

    const elements = (
        [{
            link_to: "/BGA",
            class_name: "picked",
            icon:tachometer,
            name: "BGA"
        },
        {
            link_to:"/MASTERS-LISTS" ,
            class_name: "",
            icon: list,
            name:"MASTERS LISTS"
        },
        {
            link_to:"/AGA" ,
            class_name: "",
            icon:book ,
            name: "AGA"
        },
        {
            link_to:"/AGA-MASTERDATA" ,
            class_name: "",
            icon:message,
            name: "AGA MASTERDATA"
        },

        {
            link_to:"FINANCE" ,
            class_name: "",
            icon:building ,
            name: "FINANCE"
        },
        {
            link_to:"STATISTICS" ,
            class_name: "",
            icon:file ,
            name: "STATISTICS"
        },
        {
            link_to:"HOT-DATES" ,
            class_name: "",
            icon:badge ,
            name:"HOT DATES" 
        },
        {
            link_to: "/empty",
            class_name: "",
            icon:edit ,
            name: "REMARKS"
        }
    ]

    )



    export { elements}


