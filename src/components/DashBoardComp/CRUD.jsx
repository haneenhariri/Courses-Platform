import Swal from 'sweetalert2'
var k1 = 3
var k2 = 10
localStorage.setItem('SayKEY', k1) 
localStorage.setItem('ArticleKEY', k2) 

function AlertSwalConfirm (txt, conf, msg, instruction) {
    Swal.fire({
        title: "Are you SURE?",
        text: txt,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#504DEE',
        cancelButtonColor: "#1F1C39",
        confirmButtonText: `Yes, ${conf} it!`
    }).then((result) => {
        if (result.isConfirmed) {
            instruction()
            Swal.fire({
                title: `${msg}!`,
                text: `Your File has been ${msg}.`,
                confirmButtonColor: '#61af34',
                icon: "success"
            })
        }
    })
}

export function DeleteRow(Datakey , k) {
    
    AlertSwalConfirm ("You won't be able to Revert this!", 
        "Delete", 
        "Deleted", 
        ()=> {
            const storedJsonTable = JSON.parse(localStorage.getItem(Datakey))
            if (storedJsonTable) {
                const filteredArray = storedJsonTable.filter((_ , index) => index !== k)
                localStorage.setItem(Datakey, JSON.stringify(filteredArray))
            } 
        }
    )

}

export function AddEditRow(TdData , id, func) {
    
    let I1 = document.querySelector('#input-1').value
    let I2 = document.querySelector('#input-2').value
    let I3 = document.querySelector('#input-3').value
    let I4 = document.querySelector('#input-4').value

    if (func === 'edit') {
        AlertSwalConfirm ("You want to SAVE Changes!", 
            "Save", 
            "Saved", 
            () => {
                const storedJsonTable = JSON.parse(localStorage.getItem(TdData))
                {storedJsonTable ?
                    (storedJsonTable.map(e => {
                        if(e.keyID = id) {
                            storedJsonTable[id].td1 = I1
                            storedJsonTable[id].td2 = I2
                            storedJsonTable[id].td3 = I3
                            storedJsonTable[id].td4 = I4
                            storedJsonTable[id].colorClass= 'FM-New-Edit'
                            // window.history.back()
                            localStorage.setItem(TdData, JSON.stringify(storedJsonTable))
                        }
                    })) : ('')
                }
                
            }
            
        )
    }
    if(func === 'add') {
        if (I1.trim() === '' || I2.trim() === '' || I3.trim() === '' || I4.trim() === ''){
            Swal.fire("Sorry, You can't save Empty Data. Please Fill all Fileds!")
        }
        else{
            AlertSwalConfirm ("You want to ADD a NEW ROW!", 
                "Add", 
                "Added", 
                () => {
                    const storedJsonTable = JSON.parse(localStorage.getItem(TdData))
                    const newRow = {
                        keyID: TdData === 'tableSay' ? localStorage.getItem('SayKEY') : localStorage.getItem('ArticleKEY')  ,
                        td1: I1,
                        td2: I2,
                        td3: I3,
                        td4: I4,
                        ViewURL: TdData === 'tableSay' ? 'dashstdsay/show/:id' : 'show/:id',
                        editURL: TdData === 'tableSay' ? 'dashstdsay/edit/:id' : 'edit/:id',
                        colorClass: 'FM-New-Edit'
                    }
                    if (storedJsonTable) {
                        storedJsonTable.push(newRow)
                    }
                    if (TdData === 'tableSay') {
                        k1++
                        localStorage.setItem('SayKEY', k1)
                    } else {
                        k2++
                        localStorage.setItem('ArticleKEY', k2) 
                    }
                    // window.history.back()
                     
                    
                    localStorage.setItem(TdData, JSON.stringify(storedJsonTable))
                })
        }
    }

}
