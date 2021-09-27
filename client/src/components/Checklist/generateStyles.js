export function generateStyles() {
    return {
        daysList: {
            display: "flex"
        },
        currentDay: {
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '5px',
            display: "flex",
            flexDirection: "column",
            marginBottom: '10px'
        },
        day: {
            borderRadius: '5px',
            display: "flex",
            flexDirection: "column",
            marginBottom: '10px'
        },
        checkBoxes: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        checkBox: {
            marginBottom: '27px'
        }
    }
}