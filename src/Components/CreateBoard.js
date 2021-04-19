import { TextField, DialogContentText, DialogContent, Dialog, Button, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import '../Style/style.css';


export default function CreateBoard(props) {
    if (props.state.DilogBox.Open === false) {
        return (
            <Redirect to='/'></Redirect>
        )
    }
    else {
        return (
            <div>
                <Dialog open={props.state.DilogBox.Open}
                    onClose={() => props.dilogClose(false)}
                >

                    <DialogContent id="back-img" >
                        <Typography style={{ fontWeight: 900, fontSize: 20, color: '#fff', textAlign: 'center' }} >
                            CREATE TEMPLATE
                    </Typography>
                        <hr style={{ color: '#fff', }} />

                        <DialogContentText>
                            <TextField
                                id='text-field-data'
                                variant="outlined"
                                label="Enter Template Name"
                                margin="dense"
                                fullWidth={true}
                                value={props.tempName}
                                onChange={(event) => props.setTempTitle(event.target.value)}
                                style={{ display: 'block' }}

                            />
                            <Button
                                id='btn-style-one'
                                variant="contained"
                                onClick={() => props.setTempDesign(0)}

                            >1</Button>
                            <Button
                                id='btn-style-two'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(1)}
                            >2</Button>
                            <Button
                                id='btn-style-three'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(2)}
                            >3</Button>
                            <Button
                                id='btn-style-four'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(3)}
                            >4</Button><br />
                            <Button
                                id='btn-style-five'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(4)}
                            >5</Button>
                            <Button
                                id='btn-style-six'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(5)}
                            >6</Button>
                            <Button
                                id='btn-style-seven'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(6)}
                            >7</Button>
                            <Button
                                id='btn-style-eight'
                                style={{color:'#fff'}}
                                variant="contained"
                                onClick={() => props.setTempDesign(7)}
                            >8</Button><br />

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { props.useTemp(); props.dilogClose(false); }}
                                fullWidth={true}
                                disabled={props.state.CreateTemplates.tempName === '' ? true : false}
                                style={{ margin: 3 }}
                            >CREATE</Button>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}