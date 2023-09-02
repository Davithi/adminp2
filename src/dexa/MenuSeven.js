import './css/style.css';

let text = [
    {
        id: 1,
        text: "Пнд",
        checkit: true
    },
    {
        id: 2,
        text: "Пнд",
        checkit: true
    },
    {
        id: 3,
        text: "Пнд",
        checkit: true
    },
    {
        id: 4,
        text: "Пнд",
        checkit: true
    },
    {
        id: 5,
        text: "Пнд",
        checkit: true
    },
    {
        id: 6,
        text: "Пнд",
        checkit: false
    },
    {
        id: 7,
        text: "Пнд",
        checkit: false
    },
];

let number = [
    {
        id: 1,
        text: "0-1",
        checkit: false
    },
    {
        id: 2,
        text: "1-2",
        checkit: false
    },
    {
        id: 3,
        text: "2-3",
        checkit: false
    },
    {
        id: 4,
        text: "3-4",
        checkit: false
    },
    {
        id: 5,
        text: "4-5",
        checkit: false
    },
    {
        id: 6,
        text: "5-6",
        checkit: false
    },
    {
        id: 7,
        text: "6-7",
        checkit: false
    },
    {
        id: 8,
        text: "7-8",
        checkit: false
    },
    {
        id: 9,
        text: "8-9",
        checkit: true
    },
    {
        id: 10,
        text: "10-11",
        checkit: true
    },
    {
        id: 11,
        text: "11-12",
        checkit: true
    },
    {
        id: 12,
        text: "12-13",
        checkit: true
    },
];


let numberTwo = [
    {
        id: 1,
        text: "12-13",
        checkit: true
    },
    {
        id: 2,
        text: "13-14",
        checkit: true
    },
    {
        id: 3,
        text: "14-15",
        checkit: true
    },
    {
        id: 4,
        text: "15-16",
        checkit: true
    },
    {
        id: 5,
        text: "16-17",
        checkit: true
    },
    {
        id: 6,
        text: "17-18",
        checkit: true
    },
    {
        id: 7,
        text: "18-19",
        checkit: true
    },
    {
        id: 8,
        text: "19-20",
        checkit: false
    },
    {
        id: 9,
        text: "20-21",
        checkit: false
    },
    {
        id: 10,
        text: "21-22",
        checkit: false
    },
    {
        id: 11,
        text: "22-23",
        checkit: false
    },
    {
        id: 12,
        text: "23-24",
        checkit: false
    },
];

export default function MenuSeven(){
    return(
        <div className="ms-2 mt-4">
            <p className='textDisignTwo'>Расписание работы</p>
            <div className='d-block d-sm-flex'>
                {
                    text.map((texts) => {
                        let classNames;
                        if(texts.checkit === true){
                            classNames = "ms-2 blockClasNameTrue mt-2 mt-sm-0";
                        }else{
                            classNames = "ms-2 blockClasName mt-2 mt-sm-0";
                        }
                        return(
                            <div key={texts.id} className={classNames} >
                                <p>{texts.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-block d-sm-flex mt-2'>
                {
                    number.map((numbers) => {
                        let classNames;
                        if(numbers.checkit === true){
                            classNames = "ms-2 blockClasNameTrue mt-2 mt-sm-0";
                        }else{
                            classNames = "ms-2 blockClasName mt-2 mt-sm-0";
                        }
                        return(
                            <div key={numbers.id} className={classNames}>
                                <p>{numbers.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-block d-sm-flex mt-2'>
                {
                    numberTwo.map((numbers) => {
                        let classNames;
                        if(numbers.checkit === true){
                            classNames = "ms-2 blockClasNameTrue mt-2 mt-sm-0";
                        }else{
                            classNames = "ms-2 blockClasName mt-2 mt-sm-0";
                        }
                        return(
                            <div key={numbers.id} className={classNames} style={{width:'auto'}}>
                                <p>{numbers.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}