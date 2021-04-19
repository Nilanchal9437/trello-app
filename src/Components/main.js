import { Card, Menu, MenuItem, CardContent, TextField, Button, Typography, Grid, CardHeader, CardActions } from '@material-ui/core';
import React from 'react';
import '../Style/Animation.css';
import '../Style/style.css';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CardCreate from '../Containers/cardContainer';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import CreateIcon from '@material-ui/icons/Create';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Redirect } from 'react-router';
import CardUpdate from '../Containers/cardUpdateContainer';


export default function CreateList(props) {
    if (props.state.CreateTemplates.displayTemplate === false) {
        return (
            <Redirect to='/'></Redirect>
        )
    }
    function handelDragEnd(result) {
        if (!result.destination) return;
        props.dragList(parseInt(result.source.droppableId));
        props.dropList(parseInt(result.destination.droppableId));
        props.dragCard(result.source.index);
        props.dropCard(result.destination.index);
        props.setTempoList(props.state.CreateTemplates.tempList);
        props.dndRestore();
        props.setRestoreData();
    }
    return (
        <div>
            {props.state.CreateTemplates.tempList.map((temp, index) => {
                if (props.state.CreateTemplates.frameIndex === index) {
                    if (temp.ID === 1) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="main1">
                                    <div id={temp.DESIGN[0]}></div>
                                    <div id={temp.DESIGN[1]}></div>
                                    <div id={temp.DESIGN[2]}></div>
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>


                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                </Grid>

                            </div>
                        )
                    }
                    else if (temp.ID === 2) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="main2">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>


                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                    <div>
                                        <div className={temp.DESIGN[1]}></div>
                                        <div className={temp.DESIGN[2]}></div>
                                        <div className={temp.DESIGN[3]}></div>
                                        <div className={temp.DESIGN[4]}></div>
                                        <div className={temp.DESIGN[5]}></div>
                                    </div>
                                </Grid>
                            </div>
                        )
                    }
                    else if (temp.ID === 3) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="fog">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                    <div id={temp.DESIGN[0]}></div>
                                    <div id={temp.DESIGN[1]}></div>
                                    <div id={temp.DESIGN[2]}></div>
                                </Grid>
                            </div>
                        )
                    }
                    else if (temp.ID === 4) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="ship">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                    <div id={temp.DESIGN[0]}></div>
                                    <div id={temp.DESIGN[1]}></div>
                                    <div id={temp.DESIGN[2]}></div>
                                </Grid>
                            </div>
                        )
                    }
                    else if (temp.ID === 5) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="Desert">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                    <div id={temp.DESIGN[0]}></div>
                                    <div id={temp.DESIGN[1]}></div>
                                    <div id={temp.DESIGN[2]}></div>
                                </Grid>
                            </div>
                        )
                    }
                    else if (temp.ID === 6) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="Lamp">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                    <div id={temp.DESIGN[0]}></div>
                                    <div id={temp.DESIGN[1]}></div>
                                    <div id={temp.DESIGN[2]}></div>
                                </Grid>
                            </div>
                        )
                    }
                    else if (temp.ID === 7) {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="Ocen">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#ffffffa1', padding: 10 }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#fbfbfbd4' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#fbfbfbd4', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                </Grid>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <Grid container xs={12} sm={12} id="main0">
                                    <div className='title' onDoubleClickCapture={() => { props.updateListAccess(false); props.titleList(''); }} >
                                        <Grid container item xs={12} sm={12} >
                                            <Card style={{ margin: 5, backgroundColor: '#00000094', padding: 10, color: '#fff' }}>
                                                <Typography>
                                                    TEMPLATE NAME :  {temp.TEMPLATE}
                                                </Typography>
                                            </Card>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>


                                            <DragDropContext onDragEnd={handelDragEnd} >

                                                <div style={{ display: 'flex' }} >
                                                    {temp.LIST.map((temp3, index3) => {
                                                        return (
                                                            <Droppable droppableId={'' + (index3) + ''}>
                                                                {(Provided) => (
                                                                    <Card {...Provided.droppableProps} ref={Provided.innerRef}
                                                                        style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: '#00000094', color: '#000' }}>

                                                                        <div style={{ display: 'flex' }}>
                                                                            {props.state.CreateTemplates.listUpdateAccess === true &&
                                                                                props.state.CreateTemplates.ListIndex === index3 ?
                                                                                <TextField style={{ marginLeft: 5, float: 'left', backgroundColor: '#fff', color: '#000' }}
                                                                                    value={props.state.CreateTemplates.listTitle}
                                                                                    onChange={(event) => { props.titleList(event.target.value); props.setTempoList(props.state.CreateTemplates.tempList); props.listUpdate(); props.setRestoreData(); }}
                                                                                    variant='outlined'
                                                                                    size="small"
                                                                                    margin='dense'

                                                                                ></TextField> : <Button style={{ float: 'left', color: '#fff', textTransform: 'none', marginTop: 5, width: 220, }}
                                                                                    onClick={() => {
                                                                                        props.updateListAccess(true);
                                                                                        props.titleList(temp3.LISTNAME);
                                                                                        props.indexList(index3);
                                                                                    }}


                                                                                >
                                                                                    {temp3.LISTNAME}
                                                                                </Button>
                                                                            }
                                                                            <Typography style={{ float: 'right', marginTop: 5 }}>
                                                                                <PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + index}>
                                                                                    {(popupState) => (
                                                                                        <div>
                                                                                            <React.Fragment>
                                                                                                <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                                                                    ...
                                                                                                </Button>
                                                                                                <Menu {...bindMenu(popupState)}>
                                                                                                    <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.listDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                    <MenuItem onClick={() => { props.updateListAccess(true); props.titleList(temp3.LISTNAME); props.indexList(index3); popupState.close() }}>edit</MenuItem>
                                                                                                </Menu>
                                                                                            </React.Fragment>
                                                                                        </div>
                                                                                    )}
                                                                                </PopupState>
                                                                            </Typography>
                                                                        </div>




                                                                        <CardContent id='card-list-item' onClick={() => { props.updateListAccess(false); props.titleList(''); }}>
                                                                            {temp.LIST[index3].CARDITEMS.map((temp4, index4) => {
                                                                                return (
                                                                                    <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                                        {(provided) => (
                                                                                            <Card id="Card-full-design"
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                ref={provided.innerRef}

                                                                                            >

                                                                                                <CardHeader
                                                                                                    id='card-header-design'
                                                                                                    style={{ backgroundColor: temp4.CARDCOLOR }}
                                                                                                    subheader={temp4.CARDTITLE}
                                                                                                    action={
                                                                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + index} >
                                                                                                            {(popupState) => (
                                                                                                                <div>
                                                                                                                    <React.Fragment>
                                                                                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                                                                                            <CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} />
                                                                                                                        </Button>
                                                                                                                        <Menu {...bindMenu(popupState)} >
                                                                                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexList(index3); props.cardItemDeleteIndex(index4); props.cardDelete(); props.setRestoreData(); popupState.close() }}>drop</MenuItem>
                                                                                                                            <MenuItem onClick={() => {
                                                                                                                                props.cardAccess(false);
                                                                                                                                props.cardItemDeleteIndex(index4);
                                                                                                                                props.indexList(index3);
                                                                                                                                props.dilogOpen(true);
                                                                                                                                props.setTempoList(props.state.CreateTemplates.tempList);
                                                                                                                                props.titleCard(temp4.CARDTITLE);
                                                                                                                                props.bodyCard(temp4.CARDBODY);
                                                                                                                                props.colorCard(temp4.CARDCOLOR);
                                                                                                                                props.imageCard(temp4.CARDIMAGE);
                                                                                                                                props.updateCardAccess(true);
                                                                                                                                popupState.close()
                                                                                                                            }} >edit</MenuItem>
                                                                                                                        </Menu>
                                                                                                                    </React.Fragment>
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </PopupState>

                                                                                                    }
                                                                                                />
                                                                                                {temp4.CARDIMAGE === '' ? "" :
                                                                                                    <CardActions id="card-body-design">
                                                                                                        {temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                        {temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 220 }}></CardContent>}
                                                                                                    </CardActions>}

                                                                                                {temp4.CARDBODY === '' ? "" :
                                                                                                    <CardContent id='design-card'>
                                                                                                        {temp4.CARDBODY}
                                                                                                    </CardContent>}
                                                                                            </Card>
                                                                                        )}

                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {Provided.placeholder}
                                                                        </CardContent>



                                                                        <Button
                                                                            variant='text'
                                                                            margin='dense'
                                                                            color='primary'
                                                                            size='small'
                                                                            fullWidth={true}
                                                                            onClick={() => {
                                                                                props.dilogOpen(true);
                                                                                props.cardAccess(true);
                                                                                props.indexList(index3);
                                                                                props.updateListAccess(false);
                                                                                props.updateCardAccess(false);
                                                                            }}
                                                                            style={{ color: '#fff' }}
                                                                        ><ControlPointIcon /></Button>

                                                                    </Card>
                                                                )}
                                                            </Droppable>

                                                        )
                                                    }
                                                    )
                                                    }

                                                    <Card style={{ display: 'flex', width: 280, height: 50, margin: 5, backgroundColor: '#00000094', }} >
                                                        <TextField
                                                            variant="outlined"
                                                            margin="dense"
                                                            style={{ marginTop: 5, marginLeft: 5, marginBottom: 5, backgroundColor: '#fff' }}
                                                            label="Enter List title"
                                                            value={props.listTitle}
                                                            onChange={(event) => props.titleList(event.target.value)}
                                                        />
                                                        <Button
                                                            variant='text'
                                                            margin='dense'
                                                            color='primary'
                                                            size='small'
                                                            disabled={props.state.CreateTemplates.listTitle === '' ? true : false}
                                                            style={{ marginTop: 5, marginRight: 5, marginBottom: 5, color: '#fff' }}
                                                            onClick={() => props.listCreate()}
                                                        ><ControlPointIcon fontSize='large' /></Button>
                                                    </Card>

                                                </div>

                                            </DragDropContext>
                                        </Grid>
                                    </div>
                                </Grid>
                            </div>
                        )
                    }

                }
            })}

            {props.state.CardReducer.cardIndex === true && <CardCreate />}
            {props.state.CreateTemplates.cardUpdateAccess === true && <CardUpdate />}
        </div>
    )
}