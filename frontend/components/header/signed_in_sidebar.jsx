
const signedInSidebar = (props)=> {
    return (
        <div className='signed-in-top-bar'>
            <div>

            </div>
            <div id='trade-logout-buttons'>
                <button>Trade</button>
                <button onClick={() => this.props.logout()}>Logout</button>
            </div>
        </div>
    )
}