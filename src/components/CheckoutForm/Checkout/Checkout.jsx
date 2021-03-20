import React,{useState,useEffect} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography,  Divider, Button,CssBaseline } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles'
import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link,useHistory } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart,order,onCaptureCheckout,error,refreshCart}) => {
    const [activeStep, setactivestep] = useState(0);
    const [checkoutToken, setcheckoutToken] = useState(null);
    const [shippingData, setshippingData] = useState({});
    const [isFinished, setisFinished] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    const nextStep = () => setactivestep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setactivestep((prevActiveStep) => prevActiveStep - 1)
    
    useEffect(() => {
        if(cart.id){
            const generateToken = async () => {
                try {
                    // const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
               
                    setcheckoutToken(token);
                } catch (error) {
                    history.push('/');
                }
            };
            generateToken();
        }
    }, [cart]);

    
//     const checking = () => {
//         console.table(shippingData);
// }
    const next = (data) => {
        
        setshippingData(data);
      
        nextStep();
    };
    
    const timeout = () => {
        setTimeout(() => {
           setisFinished(true)
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            {/* this block of code only run when we mention credit card in commerce.js site*/}
            <div>
                <Typography varian="h5">Thank you for your purchase. {order.customer.firstname} {order.customer.lasttname }</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Oredr ref:{order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" >Back Home</Button>
        </>
           
    ) : isFinished ? (
        <>
            
        <div>
            <Typography varian="h5">Thank you for your purchase. </Typography>
            <Divider className={classes.divider} />
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" onClick={refreshCart}>Back Home</Button>
    </>
    ): (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );
    // let Confirmation = () => (
    //     <div>confirmation</div>
    // )
    if (error) {
        <>
            <Typography variant="h5"> Error: {error}</Typography>
            <Button component={Link} to="/" variant="outlined" >Back Home</Button>
        
      </>
    }

    const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} refreshCart={refreshCart} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />
    );
    return (
        <>
            <div className={classes.bg} >

            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{ step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/>: checkoutToken && <Form/>}  {/*if we get token then form component will called*/}
                </Paper>
            </main>
            </div>
        </>
    )
}

export default Checkout
