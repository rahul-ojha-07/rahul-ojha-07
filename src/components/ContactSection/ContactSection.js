import * as emailjs from "emailjs-com";
export default {
    data() {
        return {

            name: '',
            email: '',
            message: '',
            messageSent: false,
            errors: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        validateFields() {
            let valid = true;
            this.errors = { name: '', email: '', message: '' }; // Reset errors

            if (!this.name) {
                this.errors.name = 'Name is required.';
                valid = false;
            }
            if (!this.email) {
                this.errors.email = 'Email is required.';
                valid = false;
            } else if (!this.validateEmail(this.email)) {
                this.errors.email = 'Email is invalid.';
                valid = false;
            }
            if (!this.message) {
                this.errors.message = 'Message is required.';
                valid = false;
            }

            return valid;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        async sendMessage() {
            if (!this.validateFields()) {
                return; // Stop if validation fails
            }
            const serviceID = process.env.SERVICE_ID;
            const templateID = process.env.TEMPLATE_ID;
            const userID = process.env.USER_ID;

            const params = {
                name: this.name,
                email: this.email,
                message: this.message,
            };
            try {
                await emailjs.send(serviceID, templateID, params, userID);
                this.messageSent = true;
                // Reset form fields
                this.name = '';
                this.email = '';
                this.message = '';
                setTimeout(() => {
                    this.messageSent = false;
                }, 10000);
                console.log(serviceID)
                console.log(templateID);
                console.log(userID);
            } catch (error) {
                console.error('Failed to send message:', error);
                alert('Error sending message, please try again.');
            }
        }
    },
};