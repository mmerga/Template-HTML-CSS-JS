function App () {
    console.log('Hello console');
    return 'Hello HTML from JavaScript';
}

/* Only run when page is full loaded */
document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');
    const element = document.createElement('h1');
    element.classList.add('anyClass');
    element.innerText = App();
    root.appendChild(element);
});