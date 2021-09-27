export function generateStyle(){
    return{
        modal: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: 'absolute',
            width: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        },
        pleasure: {
            cursor: 'pointer',
            position: 'relative',
            marginBottom: '30px',
            '& > :first-child':{
                marginTop: '30px'
            }
        },
        description: {
            position: 'absolute',
            top: '25px',
            left: '2px'
        }
    }
}