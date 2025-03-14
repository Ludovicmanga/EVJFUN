export const yesOrNoToBoolean = (str: string) => {
    switch(str.toLowerCase()) {
        case "no":
        return false;
        
        default: return true;
    }
}
