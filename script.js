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
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2,
        title: "DataViz Solutions",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 3,
        title: "CloudFirst Inc",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 4,
        title: "Innovation Labs",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 5,
        title: "MegaCorp Solutions",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 6,
        title: "StartupXYZ",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 7,
        title: "TechCorp Industries",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryRange: "$130,000 - $175,000",
        status: "Not Applied",
        details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
]


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
        if (job.status === status) {
            count++
        }
    }

    return count;
}

// INITIAL
totalElement.innerText = jobs.length
toggleStyle('all-btn')


// JOB CARD BUTTON - INTERVIEW AND REJECT
cartContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains('interview-btn')) {
        const jobId = event.target.dataset.jobId;

        const statusElement = event.target.closest('.job-status')
        const statusTextElement = statusElement.querySelector(".status-text")
        statusTextElement.innerText = 'Interview'

        let targetJobIndex;
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id == jobId) {
                targetJobIndex = i;
                break;
            }
        }

        jobs[targetJobIndex].status = "Interview"

        rejectedCountElement.innerText = getJobCountByStatus('Rejected')
        interviewCountElement.innerText = getJobCountByStatus('Interview')

        const rejectBtn = document.getElementById('rejected-btn')
        if (rejectBtn.classList.contains('bg-slate-950')) {
            updateJobList('Rejected')
        }

    }

    if (event.target.classList.contains('reject-btn')) {
        const jobId = event.target.dataset.jobId;

        const statusElement = event.target.closest('.job-status');
        const statusTextElement = statusElement.querySelector('.status-text')
        statusTextElement.innerText = 'REJECTED'

        let targetJobIndex;
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id == jobId) {
                targetJobIndex = i;
                break;
            }
        }

        jobs[targetJobIndex].status = "Rejected"

        rejectedCountElement.innerText = getJobCountByStatus('Rejected')
        interviewCountElement.innerText = getJobCountByStatus('Interview')

        const interviewBtn = document.getElementById('interview-btn')
        if (interviewBtn.classList.contains('bg-slate-950')) {
            updateJobList('Interview')
        }

    }

    // DELETE BUTTON

    if (event.target.closest('.delete-btn')) {

        const button = event.target.closest('.delete-btn')
        const jobId = button.dataset.jobId


        jobs = jobs.filter(job => job.id != jobId)


        totalElement.innerText = jobs.length
        interviewCountElement.innerText = getJobCountByStatus('Interview')
        rejectedCountElement.innerText = getJobCountByStatus('Rejected')


        updateJobList()
    }



})

function toggleStyle(id) {

    const buttons = document.querySelectorAll('.tab-btn');
    for (let button of buttons) {
        button.classList.remove('bg-slate-950', 'text-slate-50')
    }

    const buttonElement = document.getElementById(id);
    buttonElement.classList.add('bg-slate-950', 'text-slate-50')

    if (id === 'all-btn') {
        updateJobList()
    } else if (id === 'interview-btn') {
        updateJobList('Interview')
    } else if (id === 'rejected-btn') {
        updateJobList('Rejected')
    }

}




