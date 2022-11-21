let techs = ['HTML', 15, 'CSS', 15, 'JavaScript', 30, 'SQL', 10, 'Git', 8]


function deleteArrayElements(techName) {
    let auxArray = techs
    techs = []
     // document.write(`${element} <br>`)
    
    auxArray.map(element => {
        if(String(techName).toLocaleLowerCase().replace(" ", "") != String(element).toLocaleLowerCase().replace(" ", "")) {
        techs.push(element)
    }
    
    })     
}

deleteArrayElements("Java Script")
document.write(techs)