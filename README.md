1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

Answers:
1.getElementById selects one element by its ID. getElementsByClassName selects all elements with the same class. querySelector selects the first element matching a CSS selector, and querySelectorAll selects all matching elements.

2.I can create a new element using document.createElement(), for example: document.createElement('div'). Then you can add text or classes and insert it into the DOM with appendChild() or insertBefore().

3.When I click an element, the event bubbles up to its parent elements. For example, if a button is inside a div, clicking the button triggers the button’s click event first, then the div’s click event.

4.Event delegation is when I put one event listener on a parent instead of each child. Then you check which child triggered the event. This works well for dynamic elements and reduces the number of listeners.

5.preventDefault() stops the browser’s default action, like a link opening or a form submitting. stopPropagation() stops the event from bubbling up to parent elements, so parent handlers don’t run.





