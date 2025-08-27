1.asn:

	getElementById : gets one element by its id.
	getElementsByClassName : gets all elements with a certain class.
	querySelector : gets the first element that matches a CSS selector.
	querySelectorAll : gets all elements that match a CSS selector.

2.ans:

    1. At first I create a new element.
   
    const const newElement = document.createElement(h)

    2. Then I add a text in this new element.
    newElement.innerText = "Hey Iam Tanim";

    3. Next I will find the parent div where I will add my new element.
    const parentDiv = document.getElementById("parent-div")

    4. Insert the new element into the DOM
    parentDiv.appendChild(newElement);

3.ans:


     Event Bubbling is a system where release bottom to up in a dom.
    If you have been clicked a button. At first Event happened into highest deep element. Than event happened  parent of button and than parent of parent element.


4.ans:


    Event Delegation is a system where you do not   separate listeners to each child element, you add a single listener to the parent element. By we using this we can done our work in short time. And it is works more than first  for loop . Also by using Event Delegation we can decrease our web loading time.

5.ans:


	preventDefault() = Stops the default behavior of an element
	stopPropagation() = Stops the event from bubbling



