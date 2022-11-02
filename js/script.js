const workingDate = new Date()


const renderCalendar = (date) => {
    const currentMonth = date.getMonth(),
    currentYear = date.getFullYear()

    const lastDayOfTheMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const lastDayOfThePrevMonth = new Date(currentYear, currentMonth, 0).getDate()
    const currDayInTheWeek = new Date(currentYear, currentMonth, 1).getDay()
    const lastDayOfMonthInTheWeek = new Date(currentYear, currentMonth, lastDayOfTheMonth).getDay()

    let liTags = ""

    for (let i = currDayInTheWeek; i > 0; i--) {
        liTags += `<li class="inactive">${lastDayOfThePrevMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDayOfTheMonth; i++) {
        liTags += `<li>${i}</li>`
    }

    for (let i = lastDayOfMonthInTheWeek; i < 6; i++) {
        liTags += `<li class="inactive">${i}</li>`
    }

    let days = document.querySelector(".days ul")
    days.innerHTML = liTags

    addClickEventToDaysTags()

    loadSelectedDays()
}

const loadSelectedDays = () => {

    $.ajax ({
        type: 'GET',
        url: `src/api.php?action=load`,
        success: (r) => {
            const selectedDays = JSON.parse(r)

            selectedDays.forEach( (val) => {
                setDayAsSelected(val)
            } )
        },
        error: (e) => {
            console.log(e)
        }
    })

    const setDayAsSelected = (val) => {
        let days = document.querySelectorAll(".days ul li")

        days.forEach( (day) => {
            if (day.classList.contains("inactive")) {
                return
            }

            if (day.innerText === val) {
                addOrRemoveCssClass(day, "selected")
            }
        } )
    }
}

const addClickEventToDaysTags = () => {
    const days = document.querySelectorAll(".days ul li")
    days.forEach( day => {
        if (day.classList.contains("inactive")) {
            return
        }

        day.addEventListener(
            "click",
            ({target}) => {
                addOrRemoveCssClass(target, "selected")
            }
        )
    })

}

const addOrRemoveCssClass = (el, CssClass) => {
    if (el.classList.contains(CssClass)) {
        el.classList.remove(CssClass)
        return
    }

    el.classList.add(CssClass)
}

const submitChanges = () => {
    const days = document.querySelectorAll(".days ul li")
    let selectedDays = ""

    days.forEach( day => {
        if (day.classList.contains("inactive")) {
            return
        }

        if (!day.classList.contains("selected")) {
            return
        }

       selectedDays += `${day.innerText},`
    })

    $.ajax ({
        type: 'GET',
        url: `src/api.php?action=save&days=${selectedDays}`,
        success: (response) => {
            console.log(JSON.parse(response))

            alert("Salvo")
        },
        error: (e) => {
            console.log(e)
        }
    })
}

renderCalendar(workingDate)