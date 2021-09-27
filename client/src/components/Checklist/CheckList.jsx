import React from 'react';
import {Box, Checkbox, List, ListItem, makeStyles} from "@material-ui/core";
import {generateStyles} from "./generateStyles";
import {useSelector} from "react-redux";
import {pleasuresSelectors} from "../../redux/pleasures";


function CheckList() {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    const pleasures = useSelector(pleasuresSelectors.all)
    const {items} = pleasures

    const currentDate = new Date();
    const currentDay = currentDate.getDate()
    const month = currentDate.toLocaleString('default', {month: 'short'});


    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const monthName = months[d.getMonth()];
    const nextMonth = months.indexOf(monthName) + 2


    const firstDay = currentDate.getDate() - currentDate.getDay();
    const getNumberOfDays = function() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    };
    const numberOfDays = getNumberOfDays()

    let days = [`${month}` + " " + firstDay];
    let extraDaysRaw = numberOfDays - (firstDay + 6)
    let extraDays = -extraDaysRaw

    for (let i = 1; i <= 6; i++){
        if (firstDay + i > numberOfDays){
            for (let i = 1; i <= extraDays; i++){
                days.push(months[nextMonth] + " " + i)
            }
            break
        }
        days.push(`${month}` + " " + Number(firstDay + i))
    }
    let checkboxes = []
    for (let i = 0; i < items.length; i++){
        checkboxes.push(<Checkbox color="string" className={classes.checkBox} />)
    }
    const outCheckboxes = checkboxes.map(checkbox => {
        return checkbox
    })

    const daysList = days.map(day => {
            return (
                <Box>
                    <ListItem className={Number(day.split(' ')[1]) === currentDay ? classes.currentDay : classes.day}>
                        <Box>
                            {day}
                        </Box>
                    </ListItem>
                    <Box className={classes.checkBoxes}>
                        {outCheckboxes}
                    </Box>
                </Box>
            )
    })


    return (
        <Box>
            <List className={classes.daysList}>
                {daysList}
            </List>
        </Box>
    );
}

export default CheckList;