
// JOB CART
let jobs = [
    {
        id: 0,
        title: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 1,
        title: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salaryRange: "$80,000 - $120,000000",
        status: "Not Applied",
        details: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
    },
    {
        id: 2,
        title: "DataViz Solutions",
        role: "Data Visualization Specialist",
        location: "Boston, MA ",
        type: "Full-time",
        salaryRange: "$125,000 - $165,000",
        status: "Not Applied",
        details: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
    },
    {
        id: 3,
        title: "CloudFirst Inc",
        role: "Backend Developer",
        location: "Seattle, WA ",
        type: "Full-time",
        salaryRange: "$140,000 - $190,000",
        status: "Not Applied",
        details: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
    },
    {
        id: 4,
        title: "Innovation Labs",
        role: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salaryRange: "$110,000 - $150,000",
        status: "Not Applied",
        details: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
    },
    {
        id: 5,
        title: "MegaCorp Solutions",
        role: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salaryRange: "$130,000 - $170,000",
        status: "Not Applied",
        details: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
    },
    {
        id: 6,
        title: "StartupXYZ",
        role: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salaryRange: " $120,000 - $160,000",
        status: "Not Applied",
        details: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
    },
    {
        id: 7,
        title: "TechCorp Industries",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
    }
];

// ELEMENTS
const cartContainer = document.getElementById("cart-container");
const totalElement = document.getElementById('total')
const interviewCountElement = document.getElementById('interview')
const rejectedCountElement = document.getElementById('rejected')
const jobCountElement = document.getElementById('job-count')

// FUNCTIONS
function getJobCard(job) {
    return `
        <div class="job-card rounded shadow px-6 py-4">
            <div class="grid grid-cols-2 items-center">
                <div class="bg-white">
                    <p class=" company-name text-[#002C5C] text-[24px] font-bold">${job.title}</p>
                    <p class=" job-position  text-[#64748B] mb-4">${job.role}</p>
                </div>
                <button data-job-id='${job.id}' class="delete-btn justify-self-end hover:bg-slate-300 btn border-black">                
                    <img src="Trash.svg" alt="">
                </button>
            </div>
            <p class="selery-range text-[#64748B] mb-4 ">${job.location} • ${job.type} • ${job.salaryRange}</p>
            <p class="requirements mb-4">${job.details}</p>

            <!-- STATUS SECTION -->
            <div class="job-status">
                <p class="status-text bg-[#EEF4FF] text-[#002C5C] py-3 px-3 w-36 font-medium mb-2 uppercase">${job.status.toUpperCase()}</p>
                <button data-job-id='${job.id}' class="btn text-green-600 border-green-600 interview-btn">INTERVIEW</button>
                <button data-job-id='${job.id}' class="btn text-red-600 border-red-600 reject-btn">REJECTED</button>
            </div>
        </div>
    `
}

function updateJobList(status) {
    let jobHtml = ''
    if (!status) {
        for (const job of jobs) {
            jobHtml += getJobCard(job)
        }
        jobCountElement.innerText = `${jobs.length} Jobs`
    } else {
        for (let job of jobs) {
            if (job.status === status) {
                jobHtml += getJobCard(job)
            }
        }
        jobCountElement.innerText = `${getJobCountByStatus(status)} of ${jobs.length} Jobs`
    }

    if (jobHtml === '') {
        jobHtml = `
        <div class="flex justify-center items-center flex-col border p-6 border-slate-200">
            <img src="empty-doc.svg" alt="" class="w-[100px] h-[100px]">
            <p class="font-bold text-lg">No jobs available</p>
            <p>Check back soon for new job opportunities</p>
        </div>
        `
    }
    cartContainer.innerHTML = jobHtml
}

function getJobCountByStatus(status) {
    let count = 0;
    for (let job of jobs) {
        if (job.status === status) count++
    }
    return count;
}

// INITIAL
totalElement.innerText = jobs.length
toggleStyle('all-btn')

// JOB CARD BUTTON - INTERVIEW, REJECT, DELETE
cartContainer.addEventListener("click", (event) => {

    // INTERVIEW
    if (event.target.classList.contains('interview-btn')) {
        const jobId = event.target.dataset.jobId;
        const statusElement = event.target.closest('.job-status');
        const statusTextElement = statusElement.querySelector('.status-text');

        // Update job array
        let targetJobIndex;
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id == jobId) { targetJobIndex = i; break; }
        }
        jobs[targetJobIndex].status = "Interview";

        // Update counts
        rejectedCountElement.innerText = getJobCountByStatus('Rejected');
        interviewCountElement.innerText = getJobCountByStatus('Interview');

        // Reset styles
        statusTextElement.style.backgroundColor = '#EEF4FF';
        statusTextElement.style.color = '#002C5C';
        statusTextElement.style.border = 'none';

        // Apply green style
        statusTextElement.innerText = 'INTERVIEW';
        statusTextElement.style.backgroundColor = '#FFFFFF';
        statusTextElement.style.color = '#16a34a';
        statusTextElement.style.border = '1px solid #16a34a';
    }

    // REJECTED
    if (event.target.classList.contains('reject-btn')) {
        const jobId = event.target.dataset.jobId;
        const statusElement = event.target.closest('.job-status');
        const statusTextElement = statusElement.querySelector('.status-text');

        // Update job array
        let targetJobIndex;
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id == jobId) { targetJobIndex = i; break; }
        }
        jobs[targetJobIndex].status = "Rejected";

        // Update counts
        rejectedCountElement.innerText = getJobCountByStatus('Rejected');
        interviewCountElement.innerText = getJobCountByStatus('Interview');

        // Reset styles
        statusTextElement.style.backgroundColor = '#EEF4FF';
        statusTextElement.style.color = '#002C5C';
        statusTextElement.style.border = 'none';

        // Apply red style
        statusTextElement.innerText = 'REJECTED';
        statusTextElement.style.backgroundColor = '#FEE2E2';
        statusTextElement.style.color = '#B91C1C';
        statusTextElement.style.border = '1px solid #B91C1C';
    }

    // DELETE
    if (event.target.closest('.delete-btn')) {
        const button = event.target.closest('.delete-btn');
        const jobId = button.dataset.jobId;

        jobs = jobs.filter(job => job.id != jobId);

        totalElement.innerText = jobs.length;
        interviewCountElement.innerText = getJobCountByStatus('Interview');
        rejectedCountElement.innerText = getJobCountByStatus('Rejected');

        updateJobList();
    }

});


function toggleStyle(id) {
    const buttons = document.querySelectorAll('.tab-btn');

    // Reset all buttons to default: white bg, black text
    buttons.forEach(button => {
        button.classList.remove('bg-slate-950', 'text-slate-50');
        button.classList.add('bg-white', 'text-black'); // All buttons now have white bg + black text
    });

    // Make the clicked button active: black bg, white text
    const clickedButton = document.getElementById(id);
    clickedButton.classList.remove('bg-white', 'text-black');
    clickedButton.classList.add('bg-slate-950', 'text-slate-50');

    // Update job list
    if (id === 'all-btn') updateJobList();
    else if (id === 'interview-btn') updateJobList('Interview');
    else if (id === 'rejected-btn') updateJobList('Rejected');
}

