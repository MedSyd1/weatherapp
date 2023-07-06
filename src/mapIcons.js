
export const  ICON_MAP = new Map()


addMapping([0,1],"sun")
addMapping([2],"cloud-sun")
addMapping([3],"cloud")
addMapping([45,48],"smog")
addMapping([51, 53, 55,56, 57,61, 63, 65,66, 67,71, 73, 75,80, 81, 82,95,80,96],"cloud-showers-heavy")


function addMapping(values, icon){
    values.forEach(value => {
        ICON_MAP.set(value,icon)
    });
}