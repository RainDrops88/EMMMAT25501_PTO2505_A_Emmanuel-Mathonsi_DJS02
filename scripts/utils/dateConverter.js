

// Function to render podcast cards

export const dates = {
    formatDate(dateString) {
        const options = {  day: 'numeric',  month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
};