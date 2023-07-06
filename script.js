//your code here
let typee =document.getElementById('evaluatedText');
let countbox =document.getElementById('letterCount');
        let count=0;
     typee.addEventListener('keypress',()=>{
		 	count++;
		 
		 countbox.textContent = count;
	 })