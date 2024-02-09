console.log("hello world");

const handleSubmit = (evt) => {
	evt.preventDefault();
	alert('Form submitted successfully!');
};

const giveCompliment = () => {
	alert('You have a great taste in pictures!');
};

document.querySelector('#contact').addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', giveCompliment);