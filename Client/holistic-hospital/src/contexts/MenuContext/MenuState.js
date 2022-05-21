import React, { useState } from 'react';

import MenuContext from './MenuContext';

const MenuState = (props) => {
    //State for create new user window
    const [emergentNewUserState, setEmergentNewUserState] = useState(false);

    //State for edit user window
    const [emergentEditUserState, setEmergentEditUserState] = useState(false);

    //State for edit logged user
    const [emergentEditOwnUserState, setEmergentEditOwnUserState] =  useState(false);
    
    //State for delete One users window
    const [emergentDeleteOneUserState, setEmergentDeleteOneUserState] = useState(false);

    //State for create new exam
    const [emergentNewExamState, setEmergentNewExamState] = useState(false);
    
    //State for edit  exam
    const [emergentEditExamState, setEmergentEditExamState] = useState(false);
    
    //State for delete one exam window
    const [emergentDeleteOneExamState, setEmergentDeleteOneExamState] = useState(false);

    //State for create new vaccine
    const [emergentNewVaccineState, setEmergentNewVaccineState] = useState(false);
    
    //State for edit  vaccine
    const [emergentEditVaccineState, setEmergentEditVaccineState] = useState(false);
    
    //State for delete one vaccine window
    const [emergentDeleteOneVaccineState, setEmergentDeleteOneVaccineState] = useState(false);

    //State for create new area
    const [emergentNewAreaState, setemergentNewAreaState] = useState(false);

    //State for edit  area
    const [emergentEditAreaState, setemergentEditAreaState] = useState(false);

    //State for delete  area
    const [emergentDeleteOneAreaState, setemergentDeleteOneAreaState] = useState(false);


    function settingEmergentNewAreaState() {
        if (emergentNewAreaState) setemergentNewAreaState(false);
        else setemergentNewAreaState(true);
    }

    //Function for emergent edit user state
    function settingEmergentEditAreaState() {
        if (emergentEditAreaState) setemergentEditAreaState(false);
        else setemergentEditAreaState(true);
    }

    function settingEmergentDeleteOneAreaState() {
        if (emergentDeleteOneAreaState) setemergentDeleteOneAreaState(false);
        else setemergentDeleteOneAreaState(true);
    }
    //State for user record windows
    const [emergentShowRecordState, setEmergentShowRecordState] = useState(false);

    //State for prescription windows
    const [emergentPrescriptionState, setPrescriptionState] = useState(false);


    //Function for emergent new user state
    function settingEmergentNewUserState() {
        if (emergentNewUserState) setEmergentNewUserState(false);
        else setEmergentNewUserState(true);
    }

    //Function for emergent edit user state
    function settingEmergentEditUserState() {
        if (emergentEditUserState) setEmergentEditUserState(false);
        else setEmergentEditUserState(true);
    }

    //Function for emergent edit logged user state
    function settingEmergentEditOwnUserState() {
        if (emergentEditOwnUserState) setEmergentEditOwnUserState(false);
        else setEmergentEditOwnUserState(true);
    }

    //Function for emergent delete one user state
    function settingEmergentDeleteOneUserState() {
        if (emergentDeleteOneUserState) setEmergentDeleteOneUserState(false);
        else setEmergentDeleteOneUserState(true);
    }

    //Function for emergent new exam xistence state
    function settingEmergentNewExamState() {
        if (emergentNewExamState) setEmergentNewExamState(false);
        else setEmergentNewExamState(true);
    }

    //Function for emergent edit exam xistence state
    function settingEmergentEditExamState() {
        if (emergentEditExamState) setEmergentEditExamState(false);
        else setEmergentEditExamState(true);
    }

    //Function for emergent delete one exam state
    function settingEmergentDeleteOneExamState() {
        if (emergentDeleteOneExamState) setEmergentDeleteOneExamState(false);
        else setEmergentDeleteOneExamState(true);
    }

    //Function for emergent new vaccine xistence state
    function settingEmergentNewVaccineState() {
        if (emergentNewVaccineState) setEmergentNewVaccineState(false);
        else setEmergentNewVaccineState(true);
    }

    //Function for emergent edit vaccine xistence state
    function settingEmergentEditVaccineState() {
        if (emergentEditVaccineState) setEmergentEditVaccineState(false);
        else setEmergentEditVaccineState(true);
    }

    //Function for emergent delete vaccine exam state
    function settingEmergentDeleteOneVaccineState() {
        if (emergentDeleteOneVaccineState) setEmergentDeleteOneVaccineState(false);
        else setEmergentDeleteOneVaccineState(true);
    }

    //Function for emergent show user record state
    function settingEmergentShowRecordState() {
        if (emergentShowRecordState) setEmergentShowRecordState(false);
        else setEmergentShowRecordState(true);
    }

     //Function for emergent prescription state
     function settingEmergentPrescriptionState() {
        if (emergentPrescriptionState) setPrescriptionState(false);
        else setPrescriptionState(true);
    }
    


    return (
        <MenuContext.Provider
            value={{
                emergentNewUserState,
                emergentEditUserState,
                emergentEditOwnUserState,
                emergentDeleteOneUserState,
                emergentNewExamState,
                emergentEditExamState,
                emergentDeleteOneExamState,
                emergentNewVaccineState,
                emergentEditVaccineState,
                emergentDeleteOneVaccineState,
                emergentNewAreaState,
                emergentEditAreaState,
                emergentDeleteOneAreaState,
                emergentShowRecordState,
                emergentPrescriptionState,

                
                settingEmergentNewUserState,
                settingEmergentEditUserState,
                settingEmergentEditOwnUserState,
                settingEmergentDeleteOneUserState,
                settingEmergentNewExamState,
                settingEmergentEditExamState,
                settingEmergentDeleteOneExamState,
                settingEmergentNewVaccineState,
                settingEmergentEditVaccineState,
                settingEmergentDeleteOneVaccineState,
                settingEmergentNewAreaState,
                settingEmergentEditAreaState,
                settingEmergentDeleteOneAreaState,
                settingEmergentShowRecordState,
                settingEmergentPrescriptionState,
            }}
        >
            { props.children }
        </MenuContext.Provider>
    )
}

export default MenuState;