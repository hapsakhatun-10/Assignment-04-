## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 







```html
<div class="job-card rounded shadow px-6 py-4">

                <div class="grid grid-cols-2 items-center">
                    <div>
                        <p class=" company-name text-[#002C5C] text-[24px] font-bold">Mobile First Corp</p>
                        <p class=" job-position  text-[#64748B] mb-4">React Native Developer</p>
                    </div>

                    <button class=" delete-btn justify-self-end hover:bg-slate-300 btn border-black">
                        <img src="Trash.svg" alt="">
                    </button>
                </div>

                <p class="selery-range text-[#64748B] mb-4 ">Remote • Full-time • $130,000 - $175,000</p>
                <p class="requirements mb-4">Build cross-platform mobile applications using React Native. Work on
                    products used by
                    millions of users worldwide.</p>

                <!-- STATUS SECTION -->
                <div class="job-status">
                    <p class="status-text bg-[#EEF4FF] text-[#002C5C] py-3 px-3 w-36 font-medium mb-2">NOT APPLIED</p>
                    <button class="btn text-green-600 border-green-600">INTERVIEW</button>
                    <button class="btn text-red-600 border-red-600">REJECTED</button>
                </div>
            </div>

            <!-- 2nd -->


            <div class="job-card rounded shadow px-6 py-4">

                <div class="grid grid-cols-2 items-center">
                    <div class="bg-white">
                        <p class=" company-name text-[#002C5C] text-[24px] font-bold">Google compamy</p>
                        <p class=" job-position  text-[#64748B] mb-4">React Native Developer</p>
                    </div>

                    <button class=" delete-btn justify-self-end hover:bg-slate-300 btn border-black">
                        <img src="Trash.svg" alt="">
                    </button>
                </div>

                <p class="selery-range text-[#64748B] mb-4 ">Remote • Full-time • $130,000 - $175,000</p>
                <p class="requirements mb-4">Build cross-platform mobile applications using React Native. Work on
                    products used by
                    millions of users worldwide.</p>

                <!-- STATUS SECTION -->
                <div class="job-status">
                    <p class="status-text bg-[#EEF4FF] text-[#002C5C] py-3 px-3 w-36 font-medium mb-2">NOT APPLIED</p>
                    <button class="btn text-green-600 border-green-600">INTERVIEW</button>
                    <button class="btn text-red-600 border-red-600">REJECTED</button>
                </div>
            </div>


            <!-- 3rd -->


            <div class="job-card rounded shadow px-6 py-4">

                <div class="grid grid-cols-2 items-center">
                    <div>
                        <p class=" company-name text-[#002C5C] text-[24px] font-bold">Mobile First Corp</p>
                        <p class=" job-position  text-[#64748B] mb-4">React Native Developer</p>
                    </div>

                    <button class=" delete-btn justify-self-end hover:bg-slate-300 btn border-black">
                        <img src="Trash.svg" alt="">
                    </button>
                </div>

                <p class="selery-range text-[#64748B] mb-4 ">Remote • Full-time • $130,000 - $175,000</p>
                <p class="requirements mb-4">Build cross-platform mobile applications using React Native. Work on
                    products used by
                    millions of users worldwide.</p>

                <!-- STATUS SECTION -->
                <div class="job-status">
                    <p class="status-text bg-[#EEF4FF] text-[#002C5C] py-3 px-3 w-36 font-medium mb-2">NOT APPLIED</p>
                    <button class="btn text-green-600 border-green-600">INTERVIEW</button>
                    <button class="btn text-red-600 border-red-600">REJECTED</button>
                </div>
            </div>
```