class LS {
	constructor(){
		this.city;
		this.defaultCity = 'Tartu';
	}
	getLocationData(){
		if(localStorage.getItem('city') === null){
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('city');
		}
		return this.city;
	}
}