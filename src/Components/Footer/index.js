function Footer() {
    var year = new Date().getFullYear();

    return (
        <div className="footerWrapper">
            <div className="footerContainer">
            <p>Copyright &copy; {year}</p>
            </div>
        </div>
    )
}

export default Footer;