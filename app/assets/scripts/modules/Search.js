class Search {
    constructor() {
        this.seacrhIcon = document.querySelector(".fa-search")
        this.closeIcon = document.querySelector(".fa-close")
        this.formEl = document.querySelector("#searchForm")
        this.searchInput = document.querySelector("#searchForm input")
        this.events()
    }

    events() {
        this.seacrhIcon.addEventListener("click", () => this.toggleInput())
        this.closeIcon.addEventListener("click", () => this.closeInput())
        this.seacrhIcon.addEventListener("click", (e) => this.showSearch(e))
        this.formEl.addEventListener("submit", (e) => this.showSearch(e))
    }

    toggleInput() {
        let showCondition = this.searchInput.value.length === 0;
        showCondition && (
            this.closeIcon.classList.toggle("visible")
        )
        showCondition && (
            this.searchInput.classList.toggle("visible")
        )
    }

    closeInput() {
        this.searchInput.classList.remove("visible")
        this.closeIcon.classList.remove("visible")
        this.searchInput.value = null;
    }

    showSearch(e) {
        let TRange = null;
        function findString(str) {
            e.preventDefault();
            if (parseInt(navigator.appVersion) < 4) return;
            let strFound;
            if (window.find) {
                strFound = self.find(str);
                if (strFound && self.getSelection && !self.getSelection().anchorNode) {
                    strFound = self.find(str)
                }
                if (!strFound) {
                    strFound = self.find(str, 0, 1)
                    while (self.find(str, 0, 1)) continue
                }
            }
            else if (navigator.appName.indexOf("Microsoft") != -1) {
                if (TRange != null) {
                    TRange.collapse(false)
                    strFound = TRange.findText(str)
                    if (strFound) TRange.select()
                }
                if (TRange == null || strFound == 0) {
                    TRange = self.document.body.createTextRange()
                    strFound = TRange.findText(str)
                    if (strFound) TRange.select()
                }
            }
            else if (navigator.appName == "Opera") {
                alert("Opera browsers not supported, sorry...")
                return;
            }
            if (!strFound) alert("String '" + str + "' not found!")
            return;
        };
        this.searchInput.value.length > 0 && findString(this.searchInput.value);
        return false;
    }
}

export default Search