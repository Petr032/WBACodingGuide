const html = 'red';
const css = 'blue';
const js = 'yellow';

const colors = new Map();

colors.set("html", "red");
colors.set("css", "blue");
colors.set("js", "yellow");

function showSection(name)
{
	document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.querySelector('.' + name).classList.remove('hidden');
	
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('text-gray-100'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-red-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-blue-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-yellow-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.add('bg-white'));
	document.querySelector('.tlac-html').classList.add('text-red-600');
	document.querySelector('.tlac-css').classList.add('text-blue-600');
	document.querySelector('.tlac-js').classList.add('text-yellow-600');
	
	document.querySelector('.tlac-' + name).classList.remove('bg-white');
	document.querySelector('.tlac-' + name).classList.add('bg-' + colors.get(name) + '-600');
	document.querySelector('.tlac-' + name).classList.remove('text-' + colors.get(name) + '-600');
	document.querySelector('.tlac-' + name).classList.add('text-gray-100');
}