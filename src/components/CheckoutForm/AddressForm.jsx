import React, { useState,useEffect } from 'react'
import { commerce } from '../../lib/commerce';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField'
import {Link} from 'react-router-dom'

const AddressForm = ({checkoutToken,next}) => {
    const [shippingCountries, setshippingCountries] = useState([]);
    const [shippingCountry, setshippingCountry] = useState('');
    const [shippingSubdivisions, setshippingSubdivisions] = useState([]);
    const [shippingSubdivision, setshippingSubdivision] = useState('');
    const [shippingOptions, setshippingOptions] = useState([]);
    const [shippingOption, setshippingOption] = useState(' ');
    const methods = useForm();

    const countries_set = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
    const subdivisions_set = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options_set = shippingOptions.map((sO)=>({id:sO.id,label:`${sO.description}- (${sO.price.formatted_with_symbol})`}))

       

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setshippingCountries(countries);
        setshippingCountry(Object.keys(countries)[0])
    }
    
    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions}= await commerce.services.localeListSubdivisions(countryCode)
        setshippingSubdivisions(subdivisions)
        setshippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId,country,stateProvince= null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region:stateProvince}) //add stateProvince
        setshippingOptions(options)
        setshippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
       
        console.log("checkoutToken.id")
        console.log(checkoutToken)
        console.log(checkoutToken.id)
        
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);
    
    useEffect(() => {
      
      if (shippingSubdivision) fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubdivision)
    }, [shippingSubdivision])
    
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=> next({...data,shippingCountry,shippingSubdivision,shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstname' label='Frist Name' />
                        <FormInput name='lastname' label='Last Name'/>
                        <FormInput name='address' label='Address'/>
                        <FormInput name='email' label='Email'/>
                        <FormInput name='city' label='City'/>
                        <FormInput name='pincode' label='Pincode'/>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setshippingCountry(e.target.value)}>
                                {countries_set.map((item) => (
                                  <MenuItem key={item.id} value={item.id}>
                                                  {item.label}
                                  </MenuItem>
                                 ))}
                            </Select>
                        </Grid>

                         <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Sub-Division</InputLabel>
                              <Select value={shippingSubdivision} fullWidth onChange={(e) => setshippingSubdivision(e.target.value)}>
                                  {subdivisions_set.map((item) => (
                                   <MenuItem key={item.id} value={item.id}>
                                     {item.label}
                                   </MenuItem>
                                  ))}
                               </Select>
                        </Grid>

                       <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption } fullWidth onChange={(e)=>setshippingOption(e.target.value)}>
                            {options_set.map((item) => (
                                   <MenuItem key={item.id} value={item.id}>
                                     {item.label}
                                   </MenuItem>
                                  ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button component={Link} to='/cart' variant="outlined"> Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>     
                    </div>
                </form>
            </FormProvider>
        </>
    ); 
}

export default AddressForm
