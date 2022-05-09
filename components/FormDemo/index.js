import styles from './FormDemo.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import Select from 'react-select';
import Button from '../Button';

export default function FormDemo() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      whereFrom: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const selectOptions = [
    {
      value: 'internet',
      label: 'Internet'
    },
    {
      value: 'friends',
      label: 'Friends'
    }
  ];

  const selectStyles = {
    menu: (provided, state) => ({
      ...provided,
      left: '-1px',
      width: 'calc(100% + 2px)',
      margin: '-1px 0 0',
      padding: 0,
      borderRadius: '0 0 4px 4px',
      boxShadow: 'none',
      backgroundColor: '#171B31'
    }),

    option: () => ({
      color: '#f6f6f680',
      backgroundColor: 'transparent',
      padding: '0.75em 0.9375em',
      '&:hover': {
        color: '#71ff92'
      }
    }),

    option: () => ({
      color: '#f6f6f680',
      backgroundColor: 'transparent',
      padding: '0.75em 0.9375em',
      '&:hover': {
        color: '#71ff92'
      }
    }),

    input: () => ({
      display: 'none',
      margin: 0,
      padding: 0
    }),

    indicatorsContainer: () => ({
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      padding: 0
    }),

    indicatorContainer: () => ({
      padding: 0
    }),

    dropdownIndicator: () => ({
      padding: '8px 0',
      color: '#f6f6f680'
    }),

    placeholder: () => ({
      color: '#f6f6f680',
      margin: 0
    }),

    control: () => ({
      position: 'relative',
      cursor: 'pointer',
      padding: 0
    }),

    valueContainer: () => ({
      display: 'flex',
      padding: '0 23px 0 0'
    }),

    singleValue: () => ({
      color: '#71ff92',
      margin: 0
    })
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.headline}>
        <h2>Request a demo</h2>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={styles.error}>{formik.errors.phone}</div>
          ) : null}
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
          />
        </div>
        <div className={styles.formCol}>
          <input
            className={styles.formInput}
            id="position"
            name="position"
            type="text"
            placeholder="Position"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.position}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <Select
            className={styles.formInput}
            styles={selectStyles}
            instanceId="whereFrom"
            id="whereFrom"
            type="text"
            isSearchable={false}
            isClearable={false}
            placeholder="How did you find about us"
            value={formik.values.whereFrom}
            onChange={(option) => formik.setFieldValue('whereFrom', option)}
            options={selectOptions}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formCol}>
          <textarea
            className={classNames(styles.formInput, styles.textarea)}
            id="message"
            name="message"
            type="textarea"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
      </div>
      <div className={styles.btnHolder}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
