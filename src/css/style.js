const styles = {
    container: {
      width: '800px',
      margin: '2rem auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '24px'
    },
    header: {
      marginBottom: '24px',
      borderBottom: '1px solid #eee',
      paddingBottom: '16px'
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0'
    },
    form: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    input: {
      flex: '1',
      padding: '12px 16px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      outline: 'none',
      transition: 'border-color 0.2s',
      ':focus': {
        borderColor: '#007AFF'
      }
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      backgroundColor: '#007AFF',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#0066CC'
      }
    },
    iconButton: {
      padding: '8px',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      color: '#666',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#f5f5f5'
      }
    },
    taskList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#f1f3f5'
      }
    },
    taskText: {
      flex: '1',
      fontSize: '16px',
      color: '#333'
    },
    taskCompleted: {
      textDecoration: 'line-through',
      color: '#888'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px'
    },
    alert: {
      padding: '12px 16px',
      marginBottom: '16px',
      borderRadius: '8px',
      fontSize: '14px'
    },
    successAlert: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb'
    },
    errorAlert: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb'
    },
    emptyState: {
      textAlign: 'center',
      padding: '32px',
      color: '#666',
      fontSize: '16px'
    }
  };

  export default styles;