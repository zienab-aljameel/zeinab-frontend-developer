// Dynamic Switchable Tabs
let tabSwitchers = document.querySelectorAll('[target-wrapper]')
tabSwitchers.forEach(item => {
    item.addEventListener('click', (e)=> {
        let currentWrapperId = item.getAttribute('target-wrapper')
        let currentWrapperTargetId = item.getAttribute('target-tab')
        
        let currentWrapper =  document.querySelector(`#${currentWrapperId}`)
        let currentWrappersTarget = document.querySelector(`#${currentWrapperTargetId}`)

        let allCurrentTabItem = document.querySelectorAll(`[target-wrapper='${currentWrapperId}']`)
        let allCurrentWrappersTarget = document.querySelectorAll(`#${currentWrapperId} .tab-content`)
        
        if(currentWrappersTarget) {
            if(!currentWrappersTarget.classList.contains('active')) {
                allCurrentWrappersTarget.forEach(tabItem => {
                    tabItem.classList.remove('active')
                })
                allCurrentTabItem.forEach(item => {
                    item.classList.remove('active')
                })
                item.classList.add('active')
                currentWrappersTarget.classList.add('active')
            }
        }
    })
})




let aside = document.querySelector(".contact-me-container")
document.addEventListener("click", function (a) {
    if (a.target.className === "contact-me-container") {
        console.log("fdddddddddddddddddddd")
    }
});



// hidden right click
// const attachContextMenu = (() => {
//     const showMenu = (e) => {
//         e.preventDefault();
//     };
//     return (el) => {
//         el.addEventListener('contextmenu', (e) => showMenu(e));
//     };
//     })();
//     document.querySelectorAll('*')
//     .forEach(sec => {
//         attachContextMenu(sec, [
//         {label: "Open Link", action(o) {console.log(o)},
//             },
//         ]);
//     })