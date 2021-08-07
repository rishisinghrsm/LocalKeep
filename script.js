const addButton=document.getElementById('add');


const updateLSData =() =>{
    const textAreaData =document.querySelectorAll('textarea');
    const nottee =[];
    
    textAreaData.forEach((note)=>{
        return nottee.push(note.value);
    })
    

    localStorage.setItem('nottee',JSON.stringify(nottee));
}

const addNote =(text = '') => {
    const note=document.createElement('div');
    note.classList.add('note');

    const htmlData=`
    <div class="operation">
        <button class="btn" id="edit"><i class="fa fa-pencil-square-o "></i></button>
        <button class="btn" id="delete"><i class="fa fa-trash "></i></button>
       
       
     </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea id="textarea" class="${text ? "hidden" : ""}" rows="4" cols="100" placeholder="Start Your Notes From Here..." nocontrol></textarea> `;

    note.insertAdjacentHTML('afterbegin',htmlData);
    // console.log(note);


    const edit = note.querySelector('#edit');
    const del = note.querySelector('#delete');
    const Main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // delete button

    del.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    })

    // toggle button
    textArea.value =text;
    Main.innerHTML =text;

    edit.addEventListener('click', () => {
        Main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    textArea.addEventListener('change',(event)=>{
        const value =event.target.value;
        Main.innerHTML =value;

        updateLSData();

    })







    document.body.appendChild(note);
}


const nottee =JSON.parse(localStorage.getItem('nottee'));
if(nottee){nottee.forEach((note)=>addNote(note))};


addButton.addEventListener('click' , () => addNote() );








































