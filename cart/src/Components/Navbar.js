
const Navbar=(props)=>{
    return (
        <div style={styles.nav}>
            <div style={styles.cartIcon}>
                <img style={styles.img} src="https://cdn-icons-png.flaticon.com/512/628/628556.png" alt="cart-icon"></img>
                <span style={styles.cartQty}>{props.count}</span>
            </div>
        </div>
    );
}

export default Navbar;

const styles={
    nav:{
        position: "fixed",
        top: 0+"px",
        width: 100+"vw",
        height: 5+"rem",
        background: "#656fb1",
        // position: "relative",
   
    },
    cartIcon:{
        top: 1.5 +"rem",
        position: "absolute",
        right: 3+"rem"
    },
    cartQty:{
        position: "absolute",
        background: "yellow",
        color: "black",
        padding: 7+"px",
        top: -15+"px",
        right: -14+"px",
        fontsize: 1.5+"em",
        borderRadius: 50+"%"
    },
    img:{
        width:3+"rem"
    }
   
}