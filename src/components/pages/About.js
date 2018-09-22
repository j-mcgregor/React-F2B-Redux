import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering1: false,
      hovering2: false,
      hovering3: false,
      hovering4: false,
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    };
  }

  componentDidMount(){
    window.addEventListener('resize', this._resize_mixin_callback);
  }

  _resize_mixin_callback = () => {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }
  
  componentWillUnmount(){
     window.removeEventListener('resize', this._resize_mixin_callback);
  }

  
  render() {
    const styles = [
      { flex: this.state.hovering1 ? "80%" : undefined },
      { flex: this.state.hovering2 ? "80%" : undefined },
      { flex: this.state.hovering3 ? "80%" : undefined },
      { flex: this.state.hovering4 ? "80%" : undefined }
    ];

    const handleMouseEnter1 = () => this.setState({hovering1 : true});
    const handleMouseEnter2 = () => this.setState({hovering2 : true});
    const handleMouseEnter3 = () => this.setState({hovering3 : true});
    const handleMouseEnter4 = () => this.setState({hovering4 : true});
    
    const handleMouseLeave1 = () => this.setState({hovering1 : false});
    const handleMouseLeave2 = () => this.setState({hovering2 : false});
    const handleMouseLeave3 = () => this.setState({hovering3 : false});
    const handleMouseLeave4 = () => this.setState({hovering4 : false});

    const section1 = () => {
      if (this.state.hovering1) {
        return (
          <div className="section1" style={{width:'80%',margin:'auto'}}>
            <h1 className="display-5">Hi, I'm Jack</h1>
            <p style={{width:'300px', margin:'auto', fontSize:'1.8em'}}>I like to build things, and my new favourite building tool is React. </p>
          </div>
        )
      }
    }
    const section2 = () => {
      if (this.state.hovering2) {
        return (
          <div className="section1 mt-5" style={{width:'80%',margin:'auto'}}>
            <p className="display-5" style={{width:'300px', margin:'auto'}} >I also love digital design, being proficient in Photoshop and Illustrator as well as SASS and LESS</p>
          </div>
        )
      }
    }
    const section3 = () => {
      if (this.state.hovering3) {
        return (
          <div className="section1 mt-5" style={{width:'80%',margin:'auto'}}>
            <p className="display-5 text-justified" style={{width:'280px', margin:'auto'}} >Code-wise, I'm a Web Development Instructor at a Tech Consultancy in London, where I teach fullstack technologies, SDET and DevOps, as well as constantly learning and building with new tech outside of work</p>
          </div>
        )
      }
    }
    const section4 = () => {
      if (this.state.hovering4) {
        return (
          <div className="section1 mt-5" style={{width:'80%',margin:'auto'}}>
            <p className="display-5 text-justified" style={{width:'280px', margin:'auto'}} >If you think I might be the right person for your company or your ide then please get in touch </p>
          </div>
        )
      }
    }
    
    let icon1Style = {};
    if (this.state.viewport.width < 860) {
      icon1Style = {
        marginTop: '50px'
      }      
    } else {
      icon1Style = {
        marginTop: '200px'
      }
    }

    const icon1 = () => {
      return (
        <i style={ icon1Style } class="far fa-user-circle fa-5x"></i>
      )
    }

    const icon2 = () => {
      return (
        <i style={ icon1Style } class="fas fa-desktop fa-5x"></i>
      )
    }

    const icon3 = () => {
      return (
        <i style={ icon1Style } class="fas fa-code fa-5x"></i>
      )
    }

    const icon4 = () => {
      return (
        <i style={ icon1Style } class="fas fa-filter fa-5x"></i>
      )
    }

    return (
      <div className="container-fluid about">
        <div className="about-row">
          <div 
            className="about-col" 
            data-section="1"
            style={styles[0]}
            onClick={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            { icon1() }
            <Fade wait={700} delay={300} duration={300}  when={this.state.hovering1} unmountOnExit>
              { section1() }
            </Fade>
          </div>
          <div 
            className="about-col" 
            data-section="2"
            style={styles[1]}
            onClick={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            { icon2() }
            <Fade delay={300} duration={300}  when={this.state.hovering2}>
              { section2() }
            </Fade>
          </div>
          <div 
            className="about-col" 
            data-section="3"
            style={styles[2]}
            onClick={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            { icon3() }
            <Fade delay={300} duration={300}  when={this.state.hovering3}>
              { section3() }
            </Fade>

          </div>
          <div 
            className="about-col" 
            data-section="4"
            style={styles[3]}
            onClick={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          >
            { icon4() }
            <Fade delay={300} duration={300}  when={this.state.hovering4}>
              { section4() }
            </Fade>

          </div>
        </div>
      </div>
    )
  }
}

export default About;