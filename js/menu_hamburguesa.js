export default function menuHamburger(btnPanel,panel,linkMenu){
    const doc=document;
    doc.addEventListener("click",(e)=>{
        if(e.target.matches(btnPanel)||e.target.matches(`${btnPanel} *`)){
            doc.querySelector(panel).classList.toggle("is-active");
            doc.querySelector(btnPanel).classList.toggle("is-active");
        };

        if(e.target.matches(linkMenu)){
            doc.querySelector(panel).classList.remove("is-active");
            doc.querySelector(btnPanel).classList.remove("is-active");
        };
    });
};

