export function setup(element) {
  let text = '';
  const handleInput = (e) => {
    text = e.target.value
    console.log(text)
  }
  element.addEventListener('input', handleInput)
}
