<template>
    <h1>Testing #5</h1>
    <div class="form-container">
        <form accept-charset="UTF-8" v-on:submit.prevent="submitForm">
            <div class="form-fields">
                <label for="your-name">Name</label>
                <input type="text" id="your-name" name="your-name" v-model="getForm.name" required>
            </div>

            <div class="form-fields">
                <label for="your-email">Email</label>
                <input type="email" id="your-email" name="your-email" v-model="getForm.email" required>
            </div>

            <div class="form-fields">
                <label for="your-subject">Subject</label>
                <input type="text" id="your-subject" name="your-subject" v-model="getForm.subject" required>
            </div>

            <div class="form-fields">
                <label for="your-message">Message</label>
                <textarea type="text" id="your-message" name="your-message" v-model="getForm.message"></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    const getForm = reactive({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    async function submitForm() {

        let url = 'http://localhost/mysite/wp-json/contact-form-7/v1/contact-forms/27/feedback'
        const form = new FormData()

        form.append("your-name", getForm.name)
        form.append("your-email", getForm.email)
        form.append("your-subject", getForm.subject)
        form.append("your-message", getForm.message)
        form.append("_wpcf7_unit_tag", "wpcf7-f27-p9-o1")

       const response = await fetch(url, { method: 'POST', body: form})
    } 
</script>

<style scoped>
    .form-container{
        display:block;
    }

    .form-fields {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 4px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    input[type="text"], input[type="email"], textarea {
        border: 1px solid #ccc;
        font-size: 1rem;
        padding: 6px 10px;
        border-radius: 4px;
    }

    button[type="submit"] {
        background-color: rgb(67 56 202);
        color: white;
        font-size: 0.8rem;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        font-weight: 500;
    }
</style>