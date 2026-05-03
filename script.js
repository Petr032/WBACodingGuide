const html = 'red';
const css = 'blue';
const js = 'yellow';

const colors = new Map();

colors.set("html", "red");
colors.set("css", "blue");
colors.set("js", "yellow");

var menuOpen = false;

window.addEventListener("load", handleHash);
window.addEventListener("hashchange", handleHash);

function showSection(name)
{
	document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.querySelector('.' + name).classList.remove('hidden');

	document.querySelectorAll('._menu').forEach(sec => sec.classList.add('hidden'));
	document.querySelector('._menu-' + name).classList.remove('hidden');
	
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('text-gray-100'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-red-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-blue-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.remove('bg-yellow-600'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.add('bg-white'));
	document.querySelectorAll('.tlac').forEach(sec => sec.classList.add('hover:bg-gray-100'));
	document.querySelector('.tlac-html').classList.add('text-red-600');
	document.querySelector('.tlac-css').classList.add('text-blue-600');
	document.querySelector('.tlac-js').classList.add('text-yellow-600');
	
	document.querySelector('.tlac-' + name).classList.remove('hover:bg-gray-100');
	document.querySelector('.tlac-' + name).classList.remove('bg-white');
	document.querySelector('.tlac-' + name).classList.add('bg-' + colors.get(name) + '-600');
	document.querySelector('.tlac-' + name).classList.remove('text-' + colors.get(name) + '-600');
	document.querySelector('.tlac-' + name).classList.add('text-gray-100');
}

function mobileMenuShow()
{
	if (!menuOpen)
	{
		document.getElementById('menu-btn').classList.add('hidden');
		document.getElementById('aside-menu').classList.remove('max-xl:hidden');
		menuOpen = true;
	}
	else
	{
		document.getElementById('menu-btn').classList.remove('hidden');
		document.getElementById('aside-menu').classList.add('max-xl:hidden');
		menuOpen = false;
	}
}

function mobileMenuClose()
{
	if (window.screen.width < 1280)
	{
		document.getElementById('menu-btn').classList.remove('hidden');
		document.getElementById('aside-menu').classList.add('max-xl:hidden');
		menuOpen = false;
	}
}

function handleHash() {
  const hash = window.location.hash;

  if (hash.startsWith("#css")) 
  {
    showSection("css");
  } 
  else if (hash.startsWith("#js")) 
  {
    showSection("js");
  } 
  else 
  {
    showSection("html");
  }

  setTimeout(() => {
  document.querySelector(hash)?.scrollIntoView();
  }, 50);
}