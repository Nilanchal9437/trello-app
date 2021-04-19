import { Button, Dialog, DialogContent, DialogContentText, TextField, Typography } from '@material-ui/core';
import { Redirect } from 'react-router';
import '../Style/style.css';

export default function CardUpdate(props) {
    if (props.state.DilogBox.Open === false) {
        return (
            <Redirect to='/ListItems'></Redirect>
        )
    }
    else {
        return (
            <div>
                <Dialog
                    open={props.state.DilogBox.Open}
                    onClose={() => {
                        props.dilogClose(false);
                        props.titleCard('');
                        props.bodyCard('');
                        props.colorCard('');
                        props.imageCard('');
                    }}
                >
                    <DialogContent>
                        <Typography style={{ fontWeight: 900, display: 'flex' }} >
                            UPDATE CARD
                    </Typography>
                        <hr style={{ color: '#fff', }} />

                        <DialogContentText style={{ textAlign: 'center' }}>
                            <TextField
                                variant='outlined'
                                margin='dense'
                                placeholder='Enter your card title'
                                fullWidth={true}
                                value={props.state.CreateTemplates.cardTitlte}
                                onChange={(event) => props.titleCard(event.target.value)}
                            />
                            <TextField
                                variant='outlined'
                                margin='dense'
                                placeholder='Enter your card text'
                                fullWidth={true}
                                value={props.state.CreateTemplates.cardBody}
                                onChange={(event) => props.bodyCard(event.target.value)}
                            />

                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                fullWidth={true}
                                style={{ backgroundColor: props.state.CreateTemplates.cardColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.CreateTemplates.cardColor)}
                            >
                            </Button>

                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ backgroundColor: props.state.ColorCode.redColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.ColorCode.redColor)}
                            >
                            </Button>
                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ backgroundColor: props.state.ColorCode.blueColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.ColorCode.blueColor)}
                            >
                            </Button>
                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ backgroundColor: props.state.ColorCode.greenColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.ColorCode.greenColor)}
                            >
                            </Button>
                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ backgroundColor: props.state.ColorCode.yellowColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.ColorCode.yellowColor)}
                            >
                            </Button>
                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ backgroundColor: props.state.ColorCode.whiteColor, margin: 5 }}
                                onClick={() => props.colorCard(props.state.ColorCode.whiteColor)}
                            >
                            </Button><br />

                            {props.state.CreateTemplates.cardImage === 'Office' && <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                id='card-img1'
                                style={{ width: 300, height: 100, margin: 10 }}
                                onClick={() => props.imageCard('Office')}
                            >
                                1
                                </Button>}
                            {props.state.CreateTemplates.cardImage === 'Work' && <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                id='card-img2'
                                style={{ width: 300, height: 100, margin: 10 }}
                                onClick={() => props.imageCard('Work')}
                            >
                                2
                                </Button>} <br />

                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                id='card-img1'
                                style={{ width: 150, height: 100, margin: 10 }}
                                onClick={() => props.imageCard('Office')}
                            >
                                1
                            </Button>

                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                id='card-img2'
                                style={{ width: 150, height: 100, margin: 10 }}
                                onClick={() => props.imageCard('Work')}
                            >
                                2
                            </Button>

                            <Button
                                variant='outlined'
                                margin='dense'
                                size='small'
                                style={{ width: 150, height: 100, margin: 10, color: '#000' }}
                                onClick={() => props.imageCard('')}
                            >
                                No Image
                            </Button><br />

                            <Button
                                variant='contained'
                                color='primary'
                                size='small'
                                margin='dense'
                                fullWidth={true}
                                onClick={() => {
                                    props.cardUpdate();
                                    props.titleCard('');
                                    props.bodyCard('');
                                    props.colorCard('');
                                    props.imageCard('');
                                    props.dilogClose(false);
                                }}
                                disabled={props.state.CreateTemplates.cardTitlte === '' ? true : false}
                            >
                                UPDATE
                        </Button>

                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
