import React from 'react';
import $ from "jquery";

class Siswa extends React.Component {
    constructor(){
        super();
        this.state = {
            siswa : [
                {nis: "21398", nama: "agung", alamat: "gak punya rumah"},
            ],
            nis: "",
            nama: "",
            alamat: "",
            action: ""
        }
     }

     bind = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
     }

     SaveSiswa = (event) =>{
        event.preventDefault();
        let temp = this.state.siswa;

        if (this.state.action === "insert") {
            temp.push({
                nis: this.state.nis,
                nama: this.state.nama,
                alamat: this.state.alamat
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.nis === this.state.nis);
            temp[index].nama = this.state.nama; 
            temp[index].alamat = this.state.alamat;
        }

        this.setState({siswa: temp});
        $("#modal").modal('hide');
     }

     Add = () => { 
        this.setState({ 
            nis: "",
            nama: "",
            alamat: "",
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                nis: item.nis,
                nama: item.nama,
                alamat: item.alamat,
                action: "update"
            });
     }

     Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data siswa ini?")){
            // menghapus data
            let temp = this.state.siswa;
            // hapus data
            temp.splice(index,1);
            this.setState({siswa: temp});
            }
     }

    render(){
        return(
            <div className="container">
                <br></br>
                <h3>List Data Siswa</h3><br></br>
                <button type="button" className="btn btn-success" onClick={this.Add} data-toggle="modal" data-target="#modal">Tambah Data Siswa</button>
                <br></br>
                <ul className="list-group">
                {this.state.siswa.map((item,index) => {
                    return (
                        <li className="list-group-item" key={index}>
                            <h5 className="text-info">{item.nama}</h5>
                            <h6>NIS: {item.nis}</h6>
                            <h6>Alamat: {item.alamat}</h6>
                            <button className="btn btn-sm btn-primary m1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">Edit</button>
                            <button className="btn btn-sm btn-danger m1" onClick={() => this.Drop(index)}> Hapus </button>

                        </li>
                        );
                    })}
                </ul>

                <div className="modal fade" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title">Data Buku</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SaveSiswa}>
                                NIS
                                <input type="text" name="nis" className="form-control mb-2" onChange={this.bind} value={this.state.nis} required />
                                Nama
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Alamat
                                <input type="text" name="alamat" className="form-control mb-2" onChange={this.bind} value={this.state.alamat} required />
                                <br></br>
                                <button className="btn btn-primary btn-block" type="submit">Simpan</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Siswa;