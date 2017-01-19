
export const saveData = ({key,data}) =>{
	localStorage.setItem(key,JSON.stringify(data));
}

export const getData = (key) =>{
	return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):[];
}