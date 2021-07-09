
const clickPanels = document.querySelectorAll('.panel');


    clickPanels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        
});

function removeActiveClasses(){
    clickPanels.forEach(panel => {
        panel.classList.remove('active')
    }
        )
};



