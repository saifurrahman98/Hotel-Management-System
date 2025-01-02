    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitBtn = document.getElementById('submitBtn');
    agreeCheckbox.addEventListener('change',function(){
        submitBtn.disabled = !this.checked;
    });
