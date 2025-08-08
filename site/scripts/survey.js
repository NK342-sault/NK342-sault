const formFields = [
    {label: 'What is your name?',
     type: 'text',
     name: 'name_field',
     id: 'name_field',
     required: true,
     abbr: true},

    {label: 'What is your email?',
     type: 'text',
     name: 'email_field',
     id: 'email_field',
     required: true,
     abbr: true},

    {label: 'Which whole number is best?',
     type: 'number',
     name: 'best_whole_number',
     id: 'best_whole_number',
     min: 0},

    {label: 'Which day is best?',
     type: 'date',
     name: 'best_day',
     id: 'best_day'},

    {label: 'Which bear is best?',
     type: 'datalist',
     name: 'best_bear',
     id: 'best_bear',
     list: 'bears',
     required: true,
     abbr: true,
     options: [' ', 'Black', 'Brown', 'Care', 'Panda', 'Polar', 'Teddy']},

    
    {label: 'Do you like radio buttons?',
     type: 'radio',
     name: 'enjoys_radio_buttons',
     options: [
        { id: 'yes', value: 'yes', label: 'Yes' },
        { id: 'no', value: 'no', label: 'No' },
        { id: '?', value: '?', label: 'None of your business', checked: true }
        ]},
    
    {label: 'What is the meaning of life?',
     type: 'textarea',
     name: 'life',
     id: 'life_meaning',
     cols: 50,
     rows: 5,
     placeholder: 'Enter the correct answer here'}
];

function createField(field) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-group";

    const label = document.createElement("label");
    label.htmlFor = field.id || field.name;
    label.textContent = field.label;
    if (field.abbr) {
        const abbr = document.createElement("abbr");
        abbr.title = "required";
        abbr.setAttribute("aria-label", "required");
        abbr.textContent = "*";
        label.appendChild(abbr);
    }

    if (field.type === "radio") {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.appendChild(label);
        fieldset.appendChild(legend);

        const ul = document.createElement("ul");
        field.options.forEach(opt => {
            const li = document.createElement("li");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = field.name;
            radio.id = opt.id;
            radio.value = opt.value;
            if (opt.checked) radio.checked = true;

            const radioLabel = document.createElement("label");
            radioLabel.htmlFor = opt.id;
            radioLabel.textContent = opt.label;

            li.appendChild(radio);
            li.appendChild(radioLabel);
            ul.appendChild(li);
        });
        fieldset.appendChild(ul);
        wrapper.appendChild(fieldset);
    } else if (field.type === "datalist") {
        wrapper.appendChild(label);
        const input = document.createElement("input");
        input.setAttribute("list", field.list);
        input.type = "text";
        input.name = field.name;
        input.id = field.id;
        if (field.required) input.required = true;
        wrapper.appendChild(input);

        const datalist = document.createElement("datalist");
        datalist.id = field.list;
        field.options.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt;
            datalist.appendChild(option);
        });
        wrapper.appendChild(datalist);
    } else if (field.type === "textarea") {
        wrapper.appendChild(label);
        const textarea = document.createElement("textarea");
        textarea.name = field.name;
        textarea.id = field.id;
        if (field.cols) textarea.cols = field.cols;
        if (field.rows) textarea.rows = field.rows;
        if (field.placeholder) textarea.placeholder = field.placeholder;
        wrapper.appendChild(textarea);
    } else {
        wrapper.appendChild(label);
        const input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        input.id = field.id;
        if (field.required) input.required = true;
        if (field.min !== undefined) input.min = field.min;
        wrapper.appendChild(input);
    }

    return wrapper;
}

function buildSurveyForm(fields){
    const form = document.createElement("form");
    form.id = "creating-a-web-form";

    fields.forEach(field => {
        form.appendChild(createField(field));
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    return form;
}

document.addEventListener("DOMContentLoaded", () => {
    const oldForm = document.getElementById("creating-a-web-form");
    if (oldForm) {
        const newForm = buildSurveyForm(formFields);
        oldForm.replaceWith(newForm);
    }
});