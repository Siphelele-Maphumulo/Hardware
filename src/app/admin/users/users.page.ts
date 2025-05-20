import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/model/user.model';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];
  currentUser: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    contact: '',
    password: '',
    cPass: '',
    uid: '',
    displayName: '',
    photoURL: '',
    emailVerified: false,
  };

  editingUser: User | null = null;
  isModalOpen = false;
  showPassword = false;
  afAuth: any;
  searchTerm: string = '';
  filteredUsers: User[] = [];

  constructor(
    private fireService: FireserviceService,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthenticationServiceService
  ) {}

  isAdmin = true;

  ngOnInit() {
    this.checkAdminStatus();
    this.loadUsers();
  }

  async checkAdminStatus() {
    const user = await this.afAuth.currentUser;
    const token = await user?.getIdTokenResult();
    this.isAdmin = token?.claims?.admin || false;
  }

  loadUsers() {
    this.fireService.getAllUsersSimple().subscribe((users) => {
      this.users = users;
      this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
      console.log('Users loaded:', this.users);
    });
  }

  filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.email.toLowerCase().includes(searchTermLower) ||
        user.username.toLowerCase().includes(searchTermLower) ||
        user.contact.toLowerCase().includes(searchTermLower)
    );
  }

  openAddUserModal() {
    this.currentUser = {
      name: '',
      surname: '',
      username: '',
      email: '',
      contact: '',
      password: '',
      cPass: '',
      uid: '',
      displayName: '',
      photoURL: '',
      emailVerified: false,
    };
    this.editingUser = null;
    this.isModalOpen = true;
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.editingUser = user;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentUser = {
      name: '',
      surname: '',
      username: '',
      email: '',
      contact: '',
      password: '',
      cPass: '',
      uid: '',
      displayName: '',
      photoURL: '',
      emailVerified: false,
    };
    this.editingUser = null;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async saveUser() {
    if (!this.validateUser()) return;

    const loading = await this.loadingCtrl.create({
      message: this.editingUser ? 'Updating user...' : 'Creating user...',
    });
    await loading.present();

    try {
      if (this.editingUser) {
        await this.updateUser();
      } else {
        await this.createUser();
      }
      this.showToast(
        `User ${this.editingUser ? 'updated' : 'created'} successfully!`,
        'success'
      );
      this.closeModal();
    } catch (error: any) {
      console.error('Error saving user:', error);
      this.showToast(error.message || 'Error saving user', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async createUser() {
    // Create auth user
    const authRes = await this.fireService.signup({
      email: this.currentUser.email,
      password: this.currentUser.password,
    });

    if (authRes.user?.uid) {
      // Send verification email
      await this.authService.SendVerificationMail();

      // Save user details
      const userData: User = {
        name: this.currentUser.name,
        surname: this.currentUser.surname,
        username: this.currentUser.username,
        email: this.currentUser.email,
        contact: this.currentUser.contact,
        uid: authRes.user.uid,
        displayName: `${this.currentUser.name} ${this.currentUser.surname}`,
        photoURL: this.currentUser.photoURL || '',
        emailVerified: false,
        password: '',
        cPass: '',
      };

      await this.fireService.saveDetails(userData);
    }
  }

  validateUser(): boolean {
    if (
      !this.currentUser.name ||
      !this.currentUser.surname ||
      !this.currentUser.username ||
      !this.currentUser.contact ||
      !this.currentUser.email
    ) {
      this.showToast('Please fill in all fields', 'danger');
      return false;
    }

    if (
      !this.editingUser &&
      (!this.currentUser.password || !this.currentUser.cPass)
    ) {
      this.showToast('Please fill in password fields', 'danger');
      return false;
    }

    if (
      !this.editingUser &&
      this.currentUser.password !== this.currentUser.cPass
    ) {
      this.showToast('Passwords do not match', 'danger');
      return false;
    }

    return true;
  }

  async confirmDelete(uid: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteUser(uid),
        },
      ],
    });

    await alert.present();
  }

  async deleteUser(uid: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting user...',
    });
    await loading.present();

    try {
      await this.firestore.collection('users').doc(uid).delete();
      this.showToast('User deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      this.showToast('Error deleting user', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  // In your users page component
  async updateUser() {
    if (!this.editingUser?.uid) return;

    const loading = await this.loadingCtrl.create({
      message: 'Updating user...',
    });
    await loading.present();

    try {
      const userData = {
        name: this.currentUser.name,
        surname: this.currentUser.surname,
        username: this.currentUser.username,
        email: this.currentUser.email,
        contact: this.currentUser.contact,
        displayName: `${this.currentUser.name} ${this.currentUser.surname}`,
      };

      // Update in Firestore
      await this.fireService.updateUserData(this.editingUser.uid, userData);

      // If email changed, update it in Auth too
      if (this.currentUser.email !== this.editingUser.email) {
        await this.fireService.updateUserEmail(
          this.editingUser.uid,
          this.currentUser.email
        );
      }

      this.showToast('User updated successfully', 'success');
      this.closeModal();
    } catch (error) {
      this.showToast('Error updating user', 'danger');
      console.error(error);
    } finally {
      loading.dismiss();
    }
  }

  // async deleteUser(uid: string) {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Deleting user...'
  //   });
  //   await loading.present();

  //   try {
  //     await this.fireService.deleteUser(uid);
  //     this.showToast('User deleted successfully', 'success');
  //   } catch (error) {
  //     this.showToast('Error deleting user', 'danger');
  //     console.error(error);
  //   } finally {
  //     loading.dismiss();
  //   }
  // }

  async showToast(
    message: string,
    color: 'success' | 'danger' | 'warning' = 'success'
  ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }
}
