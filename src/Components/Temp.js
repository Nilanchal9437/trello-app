import React from 'react';
import {  MenuItem, Menu, Button, Typography, Grid, GridList, Card,  CardContent } from '@material-ui/core';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import TableChartIcon from '@material-ui/icons/TableChart';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import '../Style/Animation.css';
import '../Style/style.css';
import CreateBoard from '../Containers/boardContainer';
import { Link } from 'react-router-dom';

export default function CreateNewTemplate(props) {
    return (
        <div style={{ marginTop: 10, }}>

            <Grid container justify="center" alignItems="center" >
                <Grid item xs={12} sm={10} style={{ textAlign: 'center', marginBottom: 40 }}>
                    <Typography style={{ fontSize: 50, fontWeight: 40, }}>
                        trello clone <TableChartIcon style={{ fontSize: 40 }} />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Typography style={{ display: 'flex', fontWeight:800, }}><PersonOutlinedIcon /> Your work space board</Typography>
                    <hr />
                    <GridList>

                        {props.state.CreateTemplates.tempList.map((temp, index) => {
                            if (temp.ID === 1) {
                                return (

                                    <Card
                                        className="btn-data"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        {temp.ID === 1 && <div>
                                            <div id={temp.DESIGN[0]}></div>
                                            <div id={temp.DESIGN[1]}></div>
                                            <div id={temp.DESIGN[2]}></div></div>}
                                    </Card>
                                )

                            }
                            if (temp.ID === 2) {
                                return (
                                    <Card
                                        className="btn-second"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "2"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>

                                            )}
                                        </PopupState>

                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        <CardContent>
                                            {temp.ID === 2 && <div>
                                                <div className='sky-container2'>
                                                    <div className={temp.DESIGN[1]}></div>
                                                    <div className={temp.DESIGN[2]}></div>
                                                    <div className={temp.DESIGN[3]}></div>
                                                    <div className={temp.DESIGN[4]}></div>
                                                    <div className={temp.DESIGN[5]}></div>
                                                </div>
                                            </div>}
                                        </CardContent>
                                    </Card>

                                )
                            }
                            if (temp.ID === 3) {
                                return (

                                    <Card
                                        className="fog-btn-design"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        {temp.ID === 3 && <div>
                                            <div id={temp.DESIGN[0]}></div>
                                            <div id={temp.DESIGN[1]}></div>
                                            <div id={temp.DESIGN[2]}></div></div>}
                                    </Card>
                                )

                            }
                            if (temp.ID === 4) {
                                return (

                                    <Card
                                        className="ship-btn-design"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        {temp.ID === 4 && <div>
                                            <div id={temp.DESIGN[0]}></div>
                                            <div id={temp.DESIGN[1]}></div>
                                            <div id={temp.DESIGN[2]}></div></div>}
                                    </Card>
                                )

                            }
                            if (temp.ID === 5) {
                                return (

                                    <Card
                                        className="desert-btn-design"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        {temp.ID === 5 && <div>
                                            <div id={temp.DESIGN[0]}></div>
                                            <div id={temp.DESIGN[1]}></div>
                                            <div id={temp.DESIGN[2]}></div></div>}
                                    </Card>
                                )

                            }
                            if (temp.ID === 6) {
                                return (

                                    <Card
                                        className="lamp-btn-design"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                        {temp.ID === 6 && <div>
                                            <div id={temp.DESIGN[0]}></div>
                                            <div id={temp.DESIGN[1]}></div>
                                            <div id={temp.DESIGN[2]}></div></div>}
                                    </Card>
                                )

                            }
                            if (temp.ID === 7) {
                                return (

                                    <Card
                                        className="ocen-btn-design"
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#fff' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>
                                        
                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#ffffff" }}
                                            onClick={() => {props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                    </Card>
                                )

                            }
                            else {
                                return (
                                    <Card
                                        style={{ height: 95, width: 170, margin: 2 }}
                                    >
                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + '3'}>
                                            {(popupState) => (
                                                <div>
                                                    <React.Fragment>
                                                        <Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>
                                                            ...
                                                        </Button>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => { props.setTempoList(props.state.CreateTemplates.tempList); props.indexTemp(index); props.templateDelete();  props.setRestoreData(); popupState.close() }}>DROP</MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            )}
                                        </PopupState>

                                        <Link to='/ListItems' style={{textDecoration: 'none'}}>
                                          <Button
                                            fullWidth={true}
                                            variant="text"
                                            style={{ color: "#000" }}
                                            onClick={() => { props.dispTemp(true); props.indexTemp(index); props.titleList(''); }}
                                            >
                                            {temp.TEMPLATE}
                                        </Button>
                                        </Link>
                                    </Card>
                                )
                            }


                        })}

                        <Button
                            variant="text"
                            onClick={() => props.dilogOpen(true)}
                            style={{
                                height: 100,
                                width: 180,
                                backgroundColor: "#cfcfcf52",
                                margin: 2,
                            }}
                        >
                            Create new board
                        </Button>
                    </GridList>
                </Grid>
            </Grid>
            <CreateBoard />
        </div >
    )
}